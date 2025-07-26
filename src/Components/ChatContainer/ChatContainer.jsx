import React from 'react'
import './ChatContainer.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import ChatMessages from '../ChatMessages/ChatMessages'
import { useInfo } from '../../Context/InfoContext'
import ChatInfo from '../ChatInfo/ChatInfo'
import { useSearch } from '../../Context/SearchContext'
import ChatSearch from '../ChatSearch/ChatSearch'
import { useHideComponents } from '../../Context/HideComponents'

const ChatContainer = () => {
    const {search} = useSearch()
    const {info} = useInfo()
    const {hideChat, isMobile, hideInfo, isLaptop} = useHideComponents()

    return (
        <div className='chat-container' style={{display: (!isMobile || hideChat) ? 'flex' : 'none', justifyContent: (isLaptop && hideInfo) ? 'center' : ''}} >
            <div className='chat-background' style={{display: (isLaptop && hideInfo) ? 'none' : 'flex'}}></div>
            <div className='chat-header-messages-input-container' style={{display: (isLaptop && hideInfo) ? 'none' : 'flex'}}>
                <ChatHeader/>
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
