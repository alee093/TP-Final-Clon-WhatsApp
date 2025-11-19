import React from 'react'
import './NoChats.css'

const SeeAllChats = ({setAll, setRead, setFavorites, setGroups}) => {
    return (
        <div className='see-all-chats-container'>
            <span className='see-all-chats' onClick={() => {setAll(true); setRead(false); setFavorites(false); setGroups(false)}}>Ver todos los chats</span>
        </div>
    )
}

export default SeeAllChats
