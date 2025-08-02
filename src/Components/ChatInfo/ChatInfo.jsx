import React from 'react'
import './ChatInfo.css'
import ChatInfoHeader from '../ChatInfoHeader/ChatInfoHeader'
import ChatInfoBody from '../ChatInfoBody/ChatInfoBody'

const ChatInfo = ({setInfo}) => {
    return (
        <div className='chat-info-container'>
            <ChatInfoHeader setInfo={setInfo}/>
            <ChatInfoBody />
        </div>
    )
}

export default ChatInfo
