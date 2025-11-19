import React, { useState } from 'react'
import './PrivacyContainer.css'

const PrivacyContainer = ({setPrivacy, privacy}) => {
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    return (
        <>
            <header style={{display: privacy ? "flex" : "none"}} className='new-community-header'>
                <button className='new-community-back-button' onClick={() => setPrivacy(false)}>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="#aebbc2" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                </button>
                <h3 className='account-title'>Privacidad</h3>
            </header>
            <div className='privacy-body'>
                <div className='privacy-body-separator'>
                    <span className='text-green'>Quién puede ver mi información personal</span>
                    <ul className='privacy-list'>
                        <li className='privacy-list-item'>
                            <p className='privacy-list-item-p'>
                                Hora de últ. vez y En línea
                                <span className='privacy-list-item-span'>Nadie</span>
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                        <li className='privacy-list-item'>
                            <p className='privacy-list-item-p'>
                                Foto del perfil
                                <span className='privacy-list-item-span'>Nadie</span>
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                        <li className='privacy-list-item'>
                            <p className='privacy-list-item-p'>
                                Info.
                                <span className='privacy-list-item-span'>Nadie</span>
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                        <li className='privacy-list-item'>
                            <p className='privacy-list-item-p'>
                                Estado
                                <span className='privacy-list-item-span'>Nadie</span>
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                    </ul>
                    <div className='privacy-read-confirmation' onClick={() => setCheck1(!check1)}>
                        <p className='privacy-list-item-p'>
                            Confirmaciones de lectura
                            <span className='privacy-list-item-span'>
                                Si desactivas las confirmaciones de lectura, no podrás enviarlas ni recibirlas. Las confirmaciones de lectura se enviarán siempre en los chats grupales.
                            </span>
                        </p>
                        <div className='privacy-read-checkbox'>
                            <i class="bi bi-check" style={{display: check1 ? "block" : "none"}}></i>
                        </div>
                    </div>
                </div>
                <div className='privacy-body-separator'>
                    <span className='text-green'>
                        Mensajes temporales
                    </span>
                    <ul className='privacy-list'>
                        <li className='privacy-list-item no-border'>
                            <p className='privacy-list-item-p'>
                                Duración predeterminada de los Mensajes
                                <span className='privacy-list-item-span'>
                                    Desactivados
                                </span>
                            </p>
                                <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                    </ul>
                </div>
                <div className='privacy-body-separator'>
                    <span className='text-green'>
                        Opciones avanzadas
                    </span>
                    <ul className='privacy-list'>
                        <li className='privacy-list-item' onClick={() => setCheck2(!check2)}>
                            <p className='privacy-list-item-p'>
                                Bloquea los mensajes de cuentas desconocidas
                                <span className='privacy-list-item-span'>
                                    A fin de proteger tu cuenta y mejorar el rendimiento del dispositivo, WhatsApp bloqueará los mensajes de cuentas desconocidas si superan un determinado volumen.
                                    <a className='privacy-more-info' href='https://faq.whatsapp.com/3379690015658337/?cms_platform=web&lang=es' target='_blank'>
                                        Más información
                                    </a>
                                </span>
                            </p>
                            <div className='privacy-read-checkbox'>
                                <i class="bi bi-check" style={{display: check2 ? "block" : "none"}}></i>
                            </div>
                        </li>
                        <li className='privacy-list-item no-border' onClick={() => setCheck3(!check3)}>
                            <p className='privacy-list-item-p'>
                                Desactivar vistas previas de enlaces
                                <span className='privacy-list-item-span'>
                                    Para ayudar a evitar que sitios web de terceros puedan deducir tu dirección IP, ya no se generarán vistas previas de los enlaces que compartas en los chats.
                                    <a className='privacy-more-info' href='https://faq.whatsapp.com/445453537819972/?cms_platform=android&lang=es' target='_blank'>
                                        Más información
                                    </a>
                                </span>
                            </p>
                            <div className='privacy-read-checkbox'>
                                <i class="bi bi-check" style={{display: check3 ? "block" : "none"}}></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='privacy-body-separator'>
                    <ul className='privacy-list no-padding'>
                        <li className='privacy-list-item'>
                            <p className='privacy-list-item-p'>
                                Grupos
                                <span className='privacy-list-item-span'>Todos</span>
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                        <li className='privacy-list-item'>
                            <p className='privacy-list-item-p'>
                                Contactos bloqueados
                                <span className='privacy-list-item-span'>0</span>
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                        <li className='privacy-list-item no-border'>
                            <p className='privacy-list-item-p'>
                                Bloqueo de aplicación
                                <span className='privacy-list-item-span'>Requerir contraseña para desbloquear WhatsApp</span>
                            </p>
                            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="x16zc8z2 x17rw0jw" x="0px" y="0px"><path fill="#aebbc2" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PrivacyContainer
