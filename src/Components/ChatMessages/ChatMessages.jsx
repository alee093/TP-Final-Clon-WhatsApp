import React, { useEffect, useRef, useState } from 'react'
import './ChatMessages.css'
import { useMessage } from '../../Context/MessagesContext'
import ChatMenu from '../ChatMenu/ChatMenu'
import { useMenu } from '../../Context/MenuContext'
import { useHideComponents } from '../../Context/HideComponents'

const ChatMessages = () => {
    const { messages, setMessages } = useMessage()
    const bottomRef = useRef(null)
    const {menu} = useMenu()
    const [activeMenu, setActiveMenu] = useState(null)
    const {hideInfo, isLaptop} = useHideComponents()

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
        setActiveMenu(null)
    }
    const handleDelete = (id) => {
        setMessages(prev => prev.filter(msg => msg.id !== id))
    }
    const handleClickOutside = (event) => {
        if (!event.target.closest('.message-menu-box') && !event.target.closest('.check-user') && !event.target.closest('.check-bot')) {
            setActiveMenu(null)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <div className='container-for-menu' style={{display: (isLaptop && hideInfo) ? 'none' : 'flex'}}>
            <div className='chat-messages-container'>
                {messages.map((message) => (
                    <div key={message.id} className={`chat-message ${message.sender === 'user' ? 'chat-message-user-container' : 'chat-message-bot-container'}`}>
                        <div className={message.sender === 'user' ? 'chat-message-user' : 'chat-message-bot'}>
                            <p className='chat-message-text'>{message.text}</p>
                            <div className='chat-time-seen-container'>
                                <span className='chat-message-time'>{message.time}</span>
                                <span className='chat-message-seen'>
                                    <svg viewBox="0 0 16 11" height="11" width="16" preserveAspectRatio="xMidYMid meet" className='chat-message-seen-icon' fill="none"><title>msg-dblcheck</title><path d="M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z" fill="currentColor"></path></svg>
                                </span>
                            </div>
                            <span className={message.sender === "user" ? "check-user" : "check-bot"} onClick={() => setActiveMenu(activeMenu === message.id ? null : message.id)}>
                                <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px"><path d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"></path></svg>
                            </span>
                            {activeMenu === message.id && ( <div className='message-menu-box'>
                                <div className='message-box-option' onClick={() => handleCopy(message.text)}>Copiar</div>
                                <div className='message-box-option' onClick={() => handleDelete(message.id)}>Eliminar</div>
                            </div> )}
                        </div>
                        <span className={message.sender === "user" ? "tail-user" : "tail-bot"}>
                                <svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" className={message.sender === "user" ? "tail-icon-user" : "tail-icon-bot"} version="1.1" x="0px" y="0px"><title>tail-out</title><path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path><path d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path></svg>
                        </span>
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>
            {menu && <ChatMenu/>}
        </div>
    )
}

export default ChatMessages
