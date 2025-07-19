import React from 'react'
import './NoChats.css'
import { useChatsListButtons } from '../../Context/ChatsListButtonsContext'

const SeeAllChats = () => {
    const {setAll, setRead, setFavorites, setGroups} = useChatsListButtons()
    return (
        <div className='see-all-chats-container'>
            <span className='see-all-chats' onClick={() => {setAll(true); setRead(false); setFavorites(false); setGroups(false)}}>Ver todos los chats</span>
        </div>
    )
}

export default SeeAllChats
