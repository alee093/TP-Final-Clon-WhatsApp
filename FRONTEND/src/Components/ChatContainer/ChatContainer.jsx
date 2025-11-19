import React, { useState } from 'react'
import './ChatContainer.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import ChatMessages from '../ChatMessages/ChatMessages'
import ChatInfo from '../ChatInfo/ChatInfo'
import ChatSearch from '../ChatSearch/ChatSearch'
import { useHideComponents } from '../../Context/HideComponents'

const ChatContainer = () => {
    const [info, setInfo] = useState(false)
    const [search, setSearch] = useState(false)
    const {hideInfo, setHideInfo, isLaptop} = useHideComponents()

    return (
        <div className='chat-container' style={{justifyContent: hideInfo && isLaptop ? "center" : "start"}}>
            <div className='chat-background'></div>
            <div className='chat-header-messages-input-container' style={{display: hideInfo && isLaptop ? "none" : "flex"}}>
                <ChatHeader info={info} setInfo={setInfo} search={search} setSearch={setSearch}/>
                <ChatMessages setSearch={setSearch} setInfo={setInfo}/>
                <ChatInput />
            </div>
            <div className='chat-general-info-container'>
                {info && <ChatInfo setInfo={setInfo} />}
                {search && <ChatSearch setSearch={setSearch}/>}
            </div>
        </div>
    )
}

export default ChatContainer
