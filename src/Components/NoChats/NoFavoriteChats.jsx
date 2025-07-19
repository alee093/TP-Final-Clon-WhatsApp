import React from 'react'
import './NoChats.css'
import SeeAllChats from './SeeAllChats'

const NoFavoriteChats = () => {
    return (
        <div className='no-chats-container'>
            <p className='no-chats'>No hay chats favoritos</p>
            <SeeAllChats />
        </div>
    )
}

export default NoFavoriteChats
