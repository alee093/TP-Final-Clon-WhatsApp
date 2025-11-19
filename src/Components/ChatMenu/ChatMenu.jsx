import React, { useEffect, useRef} from 'react'
import './ChatMenu.css'
import { useMenu } from '../../Context/MenuContext'
import { useMessage } from '../../Context/MessagesContext'
import { useNavigate } from 'react-router'
import { useHideComponents } from '../../Context/HideComponents'


const ChatMenu = ({setInfo}) => {
    const {menu, setMenu} = useMenu()
    const {setMessages} = useMessage()
    const navigate = useNavigate()
    const menuRef = useRef(null)
    const { setHideInfo } = useHideComponents()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuRef])
    return (
        <div ref={menuRef} className='chat-menu-container'>
            <div className='menu-options' onClick={() => {
                    setInfo(true)
                    setMenu(!menu)
                    setHideInfo(true)
                }}>
                Info. del contacto
            </div>
            <div className='menu-options' onClick={
                () => {setMenu(!menu)
                navigate("/") 
                }}>
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
