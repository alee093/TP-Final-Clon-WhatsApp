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
    const {hideInfo, setHideInfo, isLaptop} = useHideComponents()

    return (
        <div className='chat-container' style={{justifyContent: hideInfo && isLaptop ? "center" : "start"}}>
            <div className='chat-background'></div>
            <div className='chat-header-messages-input-container' style={{display: hideInfo && isLaptop ? "none" : "flex"}}>
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
