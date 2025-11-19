import React from 'react'
import './ShortcutsContainer.css'

const shortcuts = [
    { keys: ["Ctrl", "Alt", "Shift", "U"], action: "Marcar como no leído" },
    { keys: ["Ctrl", "Alt", "Shift", "M"], action: "Silenciar" },
    { keys: ["Ctrl", "Alt", "Shift", "E"], action: "Archivar chat" },
    { keys: ["Ctrl", "Alt", "Shift", "P"], action: "Fijar chat" },
    { keys: ["Ctrl", "Alt", "/"], action: "Buscar" },
    { keys: ["Ctrl", "Shift", "F"], action: "Buscar en el chat" },
    { keys: ["Ctrl", "Alt", "N"], action: "Nuevo chat" },
    { keys: ["Ctrl", "Alt", "Tab"], action: "Chat siguiente" },
    { keys: ["Ctrl", "Alt", "Shift", "Tab"], action: "Chat anterior" },
    { keys: ["Escape"], action: "Cerrar chat" },
    { keys: ["Ctrl", "Alt", "Shift", "N"], action: "Nuevo grupo" },
    { keys: ["Ctrl", "Alt", "P"], action: "Perfil e info" },
    { keys: ["Shift", "."], action: "Aumentar la velocidad del mensaje de voz seleccionado" },
    { keys: ["Shift", ","], action: "Reducir la velocidad del mensaje de voz seleccionado" },
    { keys: ["Ctrl", "Alt", ","], action: "Ajustes" },
    { keys: ["Ctrl", "Alt", "E"], action: "Panel de emojis" },
    { keys: ["Ctrl", "Alt", "G"], action: "Panel de GIF" },
    { keys: ["Ctrl", "Alt", "S"], action: "Panel de stickers" },
    { keys: ["Alt", "K"], action: "Ampliar busqueda" },
    { keys: ["Ctrl", "Alt", "L"], action: "Bloquear aplicación" },
    { keys: ["Alt", "I"], action: "Abrir información del chat" },
    { keys: ["Ctrl", "Shift", "B"], action: "Bloquear chat" },
    { keys: ["Alt", "R"], action: "Responder" },
    { keys: ["Ctrl", "Alt", "R"], action: "Responder en privado" },
    { keys: ["Ctrl", "Alt", "D"], action: "Reenviar" },
    { keys: ["Alt", "8"], action: "Destacar mensaje" },
    { keys: ["Alt", "A"], action: "Abrir menu desplegable de archivos adjuntos" },
    { keys: ["Ctrl", "Alt", "Shift", "R"], action: "Iniciar grabacion PTT" },
    { keys: ["Alt", "P"], action: "Pausar grabacion de audio" },
    { keys: ["Ctrl", "Enter"], action: "Enviar PTT" },
    { keys: ["Ctrl", "T"], action: "Eliminar mensajes seleccionados" },
    { keys: ["Cmd", "ArrowUp"], action: "Editar el ultimo mensaje" },
]
const ShortcutsContainer = ({setShortcuts}) => {
    return (
        <div className='shortcuts-screen-container'>
            <div className='shortcuts-content-container'>
                <header className='shortcuts-header'>
                    <h1 className='shortcuts-header-title'>Atajos del teclado</h1>
                </header>
                <div className='shortcuts-body'>
                    <ul className='shortcuts-list'>
                        {shortcuts.map((shortcut, index) => (
                            <li key={index} className='shortcuts-list-item'>
                                <p className='shortcuts-list-item-p'>{shortcut.action}</p>
                                <div className='shortcuts-list-item-divider'>
                                    {shortcut.keys.map((key, i) => (
                                    <span className='shortcuts-list-item-span' key={i}>{key}</span>
                                    ))}
                                </div>
                            </li>
                        ))}
</ul>
                </div>
                <div className='shortcuts-button-container'>
                    <button className='shortcuts-button' onClick={() => setShortcuts(false)}>OK</button>
                </div>
            </div>
        </div>
    )
}


export default ShortcutsContainer
