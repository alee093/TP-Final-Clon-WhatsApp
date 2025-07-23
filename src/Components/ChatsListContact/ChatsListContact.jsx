import React, { useState } from 'react'
import './ChatsListContact.css'
import {aeropuertoBot} from '../../services/contact'
import { useMessage } from '../../Context/MessagesContext'
import { useNavigate, useLocation } from 'react-router'
const ChatsListContact = () => {
    const navigate = useNavigate()
    const {messages} = useMessage()
    const isSelected = useLocation().pathname === "/chat"
    return (
        <div className='chats-list-contact-container'>
            <div className={isSelected ? "chats-list-contact-selected" : "chats-list-contact"} onClick={() => {
                    navigate("/chat")
                }}>
                <img className='chats-list-contact-image' src="/images/aeropuerto-profile.png" alt="profile" />
                <div className='chats-list-contact-info'>
                    <h3 className='chats-list-contact-name'>{aeropuertoBot.name} <span className='chats-list-contact-time'>{messages.length > 0 ? messages[messages.length - 1].time : ""}</span></h3>
                    <p className='chats-list-contact-message'>{messages.length > 0 ? messages[messages.length - 1].text : "Mensajes cifrados de extremo a extremo"}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatsListContact
