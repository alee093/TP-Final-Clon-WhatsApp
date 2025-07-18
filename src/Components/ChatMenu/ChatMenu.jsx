import React from 'react'
import './ChatMenu.css'
import { useInfo } from '../../Context/InfoContext'
import { useMenu } from '../../Context/MenuContext'
import { useMessage } from '../../Context/MessagesContext'

const ChatMenu = () => {
    const {setInfo} = useInfo()
    const {menu, setMenu} = useMenu()
    const {setMessages} = useMessage()
    return (
        <div className='chat-menu-container'>
            <div className='menu-options' onClick={() => {
                    setInfo(true)
                    setMenu(!menu)
                }}>
                Info. del contacto
            </div>
            <div className='menu-options'>
                Cerrar chat
            </div>
            <div className='menu-options' onClick={() => {
                    setMessages([])
                    setMenu(!menu)
                }}>
                Vaciar chat
            </div>
        </div>
    )
}

export default ChatMenu
