import React from 'react'
import './NoChats.css'
import SeeAllChats from './SeeAllChats'

const NoReadChats = () => {
    return (
        <div className='no-chats-container'>
            <p className='no-chats'>No hay chats no leídos</p>
            <SeeAllChats />
        </div>
    )
}

export default NoReadChats