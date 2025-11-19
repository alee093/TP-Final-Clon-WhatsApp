import React from 'react'
import './NoChats.css'
import SeeAllChats from './SeeAllChats'

const NoFavoriteChats = ({setAll, setRead, setFavorites, setGroups}) => {
    return (
        <div className='no-chats-container'>
            <p className='no-chats'>No hay chats favoritos</p>
            <SeeAllChats setAll={setAll} setRead={setRead} setFavorites={setFavorites} setGroups={setGroups}/>
        </div>
    )
}

export default NoFavoriteChats
