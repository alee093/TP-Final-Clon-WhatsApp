import React from 'react'
import './ChatContainer.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import ChatMessages from '../ChatMessages/ChatMessages'
import { useInfo } from '../../Context/InfoContext'
import ChatInfo from '../ChatInfo/ChatInfo'
import { useSearch } from '../../Context/SearchContext'
import ChatSearch from '../ChatSearch/ChatSearch'

const ChatContainer = () => {
    const {search} = useSearch()
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
                {search && <ChatSearch />}
            </div>
        </div>
    )
}

export default ChatContainer
