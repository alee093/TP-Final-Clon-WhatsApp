import jwt from 'jsonwebtoken';
import ENVIRONMENT from '../config/environment.config.js';
import { ServerError } from '../error/error.js';

/**
 * Middleware para verificar la autenticación del usuario mediante JWT.
 * * Revisa el encabezado Authorization y adjunta la información del usuario (req.user)
 * si el token es válido.
 */
const authMiddleware = (req, res, next) => {
    
    // 1. Obtener el encabezado de autorización
    // Esperamos el formato: "Bearer [TOKEN]"
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        // No hay encabezado -> Token faltante
        return res.status(401).send({ 
            ok: false, 
            message: 'Acceso denegado. Token no proporcionado.' 
        });
    }

    // 2. Extraer el token (eliminar 'Bearer ')
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send({ 
            ok: false, 
            message: 'Acceso denegado. Formato de token inválido.' 
        });
    }

    try {
        // 3. Verificar y decodificar el token usando la clave secreta
        // Si el token es inválido o expiró, esto lanzará un error.
        const decoded = jwt.verify(token, ENVIRONMENT.JWT_SECRET);
        
        // 4. Adjuntar la información del usuario a la solicitud
        // Esto permite que las rutas accedan a req.user.id, req.user.email, etc.
        req.user = decoded; 
        
        // 5. Continuar con la ejecución de la ruta
        next();
    
    } catch (error) {
        // Manejo de errores de JWT (ej: 'jwt expired', 'invalid signature')
        console.error('Error de verificación de JWT:', error.message);
        
        // 403 Forbidden para indicar que el token es inválido, no solo que falta
        return res.status(403).send({ 
            ok: false, 
            message: 'Token inválido o expirado.' 
        });
    }
};

export default authMiddleware;