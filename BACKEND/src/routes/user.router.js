import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';

const userRouter = Router();

/**
 * Endpoint de ejemplo protegido con el middleware.
 * Solo los usuarios con un JWT válido pueden acceder.
 * * GET /api/user/me
 */
userRouter.get('/me', authMiddleware, (req, res) => {
    // Si llegamos a este punto, el token es válido y req.user contiene
    // { name, email, id } gracias al middleware.
    
    res.json({
        ok: true,
        message: 'Acceso a ruta protegida exitoso.',
        // Devolvemos la información que decodificamos del token
        user: {
            id: req.user.id,
            name: req.user.name,
            email: req.user.email,
            // Aquí puedes añadir más datos si es necesario
        }
    });
});

export default userRouter;