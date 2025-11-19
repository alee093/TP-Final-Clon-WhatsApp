import React from 'react'
import './StatusContainer.css'

const StatusContainer = () => {
    return (
        <div className='status-container'>
            <header className='chats-list-header'>
                <h1 className='chats-list-header-title'>Estados</h1>
                <div className='chats-list-header-buttons-container'>
                    <button className='chats-list-header-button'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"><path fill="#aebbc2" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg>
                    </button>
                    <button className='chats-list-header-button'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><path fill="#aebbc2" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                    </button>
                </div>
            </header>
            <div className='my-status-container'>
                <img src="/images/pepe-profile.jpg" alt="profile" className='my-status-profile'/>
                <div className='status-info-container'>
                    <p className='my-status'>Mi estado</p>
                    <span className='add-status-message'>Haz clic para añadir una actualización de estado</span>
                </div>
            </div>
            <hr></hr>
            <div className='no-chats-container'>
                <p className='no-chats'>No hay estados disponibles</p>
            </div>
        </div>
    )
}

export default StatusContainer
