import React, { useState } from 'react'
import './ChatSearch.css'
import { useSearch } from '../../Context/SearchContext'
import { useMessage } from '../../Context/MessagesContext'

const ChatSearch = () => {
    const {messages} = useMessage()
    const [filteredMessages, setFilteredMessages] = useState([])
    const handleChange = (event) => {
        const input = event.target.value.trim()
        if (input === '') {
            setFilteredMessages([])
            return
        }

        const results = messages.filter((msg) =>
            msg.text.toLowerCase().includes(input.toLowerCase())
        )

        setFilteredMessages(results)
    }
    const {setSearch} = useSearch()

    return (
        <div className='chat-search-container'>
            <div className='chat-search-header'>
                <button className='chat-info-header-close-button' onClick={() => {setSearch(false)}}>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="chat-info-header-close-icon" fill="#8797a1"><title>x</title><path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path></svg>
            </button>
            <h3 className='chat-search-header-text'>Buscar mensajes</h3>
            </div>
            <div className='chat-search-input-container'>
                <svg viewBox="0 0 24 24" height="20" className='chat-search-calendar-icon' width="20" preserveAspectRatio="xMidYMid meet" fill="none"><path d="M19 3H20C21.1 3 22 3.9 22 5V21C22 22.1 21.1 23 20 23H4C2.9 23 2 22.1 2 21V5C2 3.9 2.9 3 4 3H5V2C5 1.45 5.45 1 6 1C6.55 1 7 1.45 7 2V3H17V2C17 1.45 17.45 1 18 1C18.55 1 19 1.45 19 2V3ZM5 21H19C19.55 21 20 20.55 20 20V8H4V20C4 20.55 4.45 21 5 21Z" fill="#8797a1"></path></svg>
                <form className='search-messages-form'>
                    <label>Search messages</label>
                    <button type='submit' className='search-messages-submit-button'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><path fill="#00a884" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                    </button>
                    <input type="text" placeholder='Buscar' autoComplete='off' name='searchMessagesInput' className='search-messages-input'onChange={handleChange}/>
                </form>
            </div>
            <div className='chat-search-results'>
                {filteredMessages.map((message, index) => (
                    <div key={index} className='chat-search-message'>
                        <span className='chat-search-message-time'>{message.time}</span>
                        <span className='chat-search-message-text'>{message.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChatSearch
