import React, { useState } from 'react'
import './ChannelsContainer.css'

const ChannelsContainer = () => {
    const [follow, setFollow] = useState("Seguir")
    return (
        <div className='status-container'>
            <header className='channels-header'>
                <h1 className='chats-list-header-title'>Canales</h1>
                    <button className='chats-list-header-button'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"><path fill="#aebbc2" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg>
                    </button>
            </header>
            <div className='channels-text-container'>
                <p className='channels-top-text'>Conoce las novedades de tus temas favoritos</p>
                <p className='channels-bottom-text'>A continuación, busca canales para seguir.</p>
            </div>
            <div className='whatsapp-channel-container'>
                <img className='whatsapp-channel-image' src="/images/whatsapp-logo.png" alt="whatsapp" />
                    <div className='whatsapp-channel-name-button-container'>
                        <div className='whatsapp-channel-info-container'>
                            <p className='whatsapp-channel-name'>WhatsApp</p>
                            <p className='whatsapp-channel-message'>236,1 M de seguidores</p>
                        </div>
                        <button className={follow === "Siguiendo" ? "follow-button following" : "follow-button"} onClick={() => setFollow(follow === "Seguir" ? "Siguiendo" : "Seguir")}>{follow}</button>
                    </div>
            </div>
        </div>
    )
}

export default ChannelsContainer
