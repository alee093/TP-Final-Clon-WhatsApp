import React from 'react'
import './ChatContainer.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import ChatMessages from '../ChatMessages/ChatMessages'
import { useInfo } from '../../Context/InfoContext'
import ChatInfo from '../ChatInfo/ChatInfo'

const ChatContainer = () => {

    const {info} = useInfo()
    return (
        <div className='chat-container'>
            <div className='chat-background'></div>
            <div className='chat-header-messages-input-container'>
                <ChatHeader />
                <ChatMessages />
                <ChatInput />
            </div>
            <div className='chat-general-info-container'>
                {info && <ChatInfo />}
            </div>
        </div>
    )
}

export default ChatContainer
