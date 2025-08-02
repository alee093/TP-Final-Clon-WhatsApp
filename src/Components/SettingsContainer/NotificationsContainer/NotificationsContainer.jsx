import React, { useState } from 'react'

const NotificationsContainer = ({notifications, setNotifications}) => {
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(true)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)
    
    return (
        <>
            <header className='new-community-header'>
                <button className='new-community-back-button' onClick={() => setNotifications(false)}>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="#aebbc2" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                </button>
                <h3 className='account-title'>Notificaciones</h3>
            </header>
            <div className='privacy-body'>
                <div className='privacy-body-separator'>
                    <span className='text-green'>Mensajes</span>
                    <div className='container-with-green-switch'>
                        <p className='privacy-list-item-p'>
                            Notificaciones de mensajes
                            <span className='privacy-list-item-span'>
                                Se muestran notificaciones de mensajes nuevos.
                            </span>
                        </p>
                        <div className={active ? "green-switch-active" : "green-switch"} onClick={() => setActive(!active)}>
                            <div className={active ? "green-switch-circle-active" : "green-switch-circle"}></div>
                        </div>
                    </div>
                    <div className='container-with-green-switch' style={{opacity: active2 ? 1 : 0.3}}>
                        <p className='privacy-list-item-p'>
                            Mostrar vista previa
                        </p>
                        <div className={active2 ? "green-switch-active" : "green-switch"} onClick={() => setActive2(!active2)}>
                            <div className={active2 ? "green-switch-circle-active" : "green-switch-circle"}></div>
                        </div>
                    </div>
                    <div className='container-with-green-switch'  style={{opacity: active3 ? 1 : 0.3}}>
                        <p className='privacy-list-item-p'>
                            Mostrar notificaciones de reacciones
                        </p>
                        <div className={active3 ? "green-switch-active" : "green-switch"} onClick={() => setActive3(!active3)}>
                            <div className={active3 ? "green-switch-circle-active" : "green-switch-circle"}></div>
                        </div>
                    </div>
                    <div className='container-with-green-switch'>
                        <p className='privacy-list-item-p'>
                            Sincronización en segundo plano
                            <span className='privacy-list-item-span'>
                                Sincroniza los mensajes en segundo plano para obtener un rendimiento más rápido.
                            </span>
                        </p>
                        <div className={active4 ? "green-switch-active" : "green-switch"} onClick={() => setActive4(!active4)}>
                            <div className={active4 ? "green-switch-circle-active" : "green-switch-circle"}></div>
                        </div>
                    </div>
                    <div className='container-with-green-switch'>
                        <p className='privacy-list-item-p'>
                            Sonidos para mensajes entrantes
                            <span className='privacy-list-item-span'>
                                Se reproduce un sonido cuando hay mensajes entrantes.
                            </span>
                        </p>
                        <div className={active5 ? "green-switch-active" : "green-switch"} onClick={() => setActive5(!active5)}>
                            <div className={active5 ? "green-switch-circle-active" : "green-switch-circle"}></div>
                        </div>
                    </div>
                    <div className='container-with-green-switch'>
                        <p className='privacy-list-item-p'>
                            Sonidos para mensajes salientes
                            <span className='privacy-list-item-span'>
                                Se reproduce un sonido cuando hay mensajes salientes.
                            </span>
                        </p>
                        <div className={active5 ? "green-switch-active" : "green-switch"} onClick={() => setActive6(!active5)}>
                            <div className={active5 ? "green-switch-circle-active" : "green-switch-circle"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationsContainer
