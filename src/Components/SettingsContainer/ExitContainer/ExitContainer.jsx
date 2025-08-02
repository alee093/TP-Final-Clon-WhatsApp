import React from 'react'
import './ExitContainer.css'

const ExitContainer = ({exit, setExit}) => {
    return (
        <div className='exit-container-screen'>
            <div className='exit-content-container'>
                <div>
                    <h1 className='exit-text-title'>¿Deseas cerrar sesión?</h1>
                    <p className='exit-text'>¿Confirmas que deseas cerrar sesión?</p>
                    <p className='exit-text'>También puedes activar el <a href='https://faq.whatsapp.com/1726618467788240/?cms_platform=web&lang=es' target='_blank'>bloqueo de aplicación</a></p>
                </div>
                <div className='exit-buttons-container'>
                    <button className='cancel-button' onClick={() => setExit(false)}>Cancelar</button>
                    <button className='exit-button' onClick={() => {
                        setExit(false)
                        alert('no me pidas tanto')
                    }}>Cerrar sesión</button>
                </div>
            </div>
        </div>
    )
}   

export default ExitContainer
