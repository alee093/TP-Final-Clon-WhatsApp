import React from 'react'
import './ChatInfo.css'
import ChatInfoHeader from '../ChatInfoHeader/ChatInfoHeader'
import ChatInfoBody from '../ChatInfoBody/ChatInfoBody'

const ChatInfo = () => {
    return (
        <div className='chat-info-container'>
            <ChatInfoHeader />
            <ChatInfoBody />
        </div>
    )
}

export default ChatInfo
