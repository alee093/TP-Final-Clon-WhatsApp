import React from 'react'
import './ChatInfoHeader.css'
import { useInfo } from '../../Context/InfoContext'
import { useHideComponents } from '../../Context/HideComponents'

const ChatInfoHeader = () => {
    const {setInfo} = useInfo()
    const {setHideInfo} = useHideComponents()
    return (
        <header className='chat-info-header'>
            <button className='chat-info-header-close-button' onClick={() => {
                setInfo(false)
                setHideInfo(false)
            }}>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="chat-info-header-close-icon" fill="#8797a1"><title>x</title><path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path></svg>
            </button>
            <div className='chat-info-header-title-container'>
                <h1 className='chat-info-header-title-text'>Info. del contacto</h1>
            </div>
        </header>
    )
}

export default ChatInfoHeader
