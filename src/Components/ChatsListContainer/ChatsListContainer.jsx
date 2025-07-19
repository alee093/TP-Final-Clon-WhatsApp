import React, { useState } from 'react'
import './ChatsListContainer.css'
import ChatsListContact from '../ChatsListContact/ChatsListContact'
import { aeropuertoBot } from '../../utils/contact'
import { useMessage } from '../../Context/MessagesContext'
import ChatListNotFound from '../ChatsListContact/ChatListNotFound'


const ChatsListContainer = () => {
    const { messages } = useMessage()
    const [searchTerm, setSearchTerm] = useState("")

    const lastMessage = messages[messages.length - 1]?.text.toLowerCase() || ""
    const matchesFilter = aeropuertoBot.name.toLowerCase().includes(searchTerm.toLowerCase()) || lastMessage.includes(searchTerm.toLowerCase())

    return (
        <div className='chats-list-container'>
            <header className='chats-list-header'>
                <h1 className='chats-list-header-title'>Chats</h1>
                <div className='chats-list-header-buttons-container'>
                    <button className='chats-list-header-button'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="#aebbc2"></path><path fill-rule="evenodd"  d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="#aebbc2"></path></svg>
                    </button>
                    <button className='chats-list-header-button'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><title>menu</title><path fill="#aebbc2" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                    </button>
                </div>
            </header>
            <div className='chats-list-input-container'>
                <form className='chats-list-form' onSubmit={(e) => e.preventDefault()}>
                    <label>Search</label>
                    <button type='submit' className='chats-list-search-button'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" ><title>search</title><path fill="#8797a1" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
                    </button>
                    <input className='chats-list-input' type='text' placeholder='Buscar' name='search' autoComplete='off' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                </form>
                <div className='chats-list-buttons-container'>
                    <button className="chats-list-buttons">Todos</button>
                    <button className="chats-list-buttons">No leídos</button>
                    <button className="chats-list-buttons">Favoritos</button>
                    <button className="chats-list-buttons">Grupos</button>
                </div>
            </div>
            {matchesFilter && <ChatsListContact />}
            {!matchesFilter && <ChatListNotFound />}
        </div>
    )
}

export default ChatsListContainer
