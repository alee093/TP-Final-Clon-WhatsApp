import React from 'react'
import './NoChats.css'
import SeeAllChats from './SeeAllChats'

const NoGroups = () => {
    return (
        <div className='no-chats-container'>
            <p className='no-chats'>No hay grupos</p>
            <SeeAllChats />
        </div>
    )
}

export default NoGroups