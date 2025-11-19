import React, { useState } from 'react'
import './ChatsContainer.css'

const ChatsContainer = ({setChats, chats}) => {
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(true)
    const [active3, setActive3] = useState(true)
    return (
        <>
            <header className='new-community-header'>
                <button className='new-community-back-button' onClick={() => setChats(false)}>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="#aebbc2" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                </button>
                <h3 className='account-title'>Chats</h3>
            </header>
            <div className='privacy-body'>
                <div className='privacy-body-separator'>
                    <span className='text-green'>Pantalla</span>
                    <ul className='privacy-list'>
                        <li className='privacy-list-item'>
                            <p className='privacy-list-item-p'>
                                Tema
                                <span className='privacy-list-item-span'>Predeterminado del sistema</span>
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                        <li className='privacy-list-item no-border'>
                            <p className='privacy-list-item-p'>
                                Fondo
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                    </ul>
                </div>
                <div className='privacy-body-separator'>
                    <span className='text-green'>Ajustes de chats</span>
                    <ul className='privacy-list'>
                        <li className='privacy-list-item'>
                            <p className='privacy-list-item-p'>
                                Calidad de carga de los archivos multimedia
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                        <li className='privacy-list-item'>
                            <p className='privacy-list-item-p'>
                                Descarga automática de archivos multimedia
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                    </ul>
                    <div className='container-with-green-switch' onClick={() => setActive(!active)}>
                        <p className='privacy-list-item-p'>
                            Correcíon ortográfica
                            <span className='privacy-list-item-span'>
                                Revisa la ortografía mientras escribes.
                            </span>
                        </p>
                        <div className={active ? "green-switch-active" : "green-switch"}>
                            <div className={active ? "green-switch-circle-active" : "green-switch-circle"}></div>
                        </div>
                    </div>
                    <div className='container-with-green-switch' onClick={() => setActive2(!active2)}>
                        <p className='privacy-list-item-p'>
                            Reemplaza texto con emojis
                            <span className='privacy-list-item-span'>
                                El emoji reemplazara el texto especifico mientras escribes.
                            </span>
                        </p>
                        <div className={active2 ? "green-switch-active" : "green-switch"}>
                            <div className={active2 ? "green-switch-circle-active" : "green-switch-circle"}></div>
                        </div>
                    </div>
                    <div className='container-with-green-switch' onClick={() => setActive3(!active3)}>
                        <p className='privacy-list-item-p'>
                            Enter para enviar
                            <span className='privacy-list-item-span'>
                                Se enviará tu mensaje cuando presiones la tecla Enter.
                            </span>
                        </p>
                        <div className={active3 ? "green-switch-active" : "green-switch"}>
                            <div className={active3 ? "green-switch-circle-active" : "green-switch-circle"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatsContainer
