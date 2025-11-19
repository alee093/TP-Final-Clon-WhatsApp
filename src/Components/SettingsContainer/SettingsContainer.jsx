import React, { useState } from 'react'
import './SettingsContainer.css'
import { useEditing } from '../../Context/EditingContext'
import AccountContainer from './AccountContainer/AccountContainer'
import PrivacyContainer from './PrivacyContainer/PrivacyContainer'
import ChatsContainer from './ChatsContainer/ChatsContainer'
import NotificationsContainer from './NotificationsContainer/NotificationsContainer'
import HelpContainer from './HelpContainer/HelpContainer'
import ExitContainer from './ExitContainer/ExitContainer'
import ShortcutsContainer from './ShortcutsContainer/ShortcutsContainer'

const SettingsContainer = () => {
    const { name, info } = useEditing()
    const [account, setAccount] = useState(false)
    const [privacy, setPrivacy] = useState(false)
    const [chats, setChats] = useState(false)
    const [notifications, setNotifications] = useState(false)
    const [help, setHelp] = useState(false)
    const [exit, setExit] = useState(false)
    const [shortcuts, setShortcuts] = useState(false)
    return (
        <div className='status-container'>
            <header className='channels-header'  style={{display: chats || privacy || account || notifications || help ? "none" : "flex"}}>
                <h1 className='chats-list-header-title'>Ajustes</h1>
            </header>
            <form className='settings-form'  style={{display: chats || privacy || account || notifications || help ? "none" : "flex"}}>
                <label>Search</label>
                <button type='submit' className='chats-list-search-button'>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" ><path fill="#8797a1" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
                </button>
                <input className='settings-input' type='text' placeholder='Buscar en los ajustes' name='search' autoComplete='off'></input>
            </form>
            <div className='settings-profile-container'  style={{display: chats || privacy || account || notifications || help ? "none" : "flex"}}>
                <img src="/images/pepe-profile.jpg" alt='pepe-profile' className='settings-profile'/>
                <div className='settings-info-container'>
                    <p className='settings-username'>{name}</p>
                    <span className='settings-status'>{info}</span>
                </div>
            </div>
            <div className='settings-list-container'  style={{display: chats || privacy || account || notifications || help ? "none" : "block"}}>
                <ul>
                    <li className='settings-list' onClick={() => setAccount(true)}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#d0d7db"></path></svg>
                        <p className='settings-list-text'>Cuenta</p>
                    </li>
                    <li className='settings-list' onClick={() => setPrivacy(true)}>
                        <svg viewBox="0 0 28 35" height="23" width="23" preserveAspectRatio="xMidYMid meet"  version="1.1"><path d="M14,1.10204082 C18.5689011,1.10204082 22.2727273,4.80586698 22.2727273,9.37476809 L22.272,12.1790408 L22.3564837,12.181606 C24.9401306,12.294858 27,14.4253101 27,17.0368705 L27,29.4665309 C27,32.1506346 24.824104,34.3265306 22.1400003,34.3265306 L5.85999974,34.3265306 C3.175896,34.3265306 1,32.1506346 1,29.4665309 L1,17.0368705 C1,14.3970988 3.10461313,12.2488858 5.72742704,12.178644 L5.72727273,9.37476809 C5.72727273,4.80586698 9.43109889,1.10204082 14,1.10204082 Z M14,19.5600907 C12.0418995,19.5600907 10.4545455,21.2128808 10.4545455,23.2517007 C10.4545455,25.2905206 12.0418995,26.9433107 14,26.9433107 C15.9581005,26.9433107 17.5454545,25.2905206 17.5454545,23.2517007 C17.5454545,21.2128808 15.9581005,19.5600907 14,19.5600907 Z M14,4.79365079 C11.4617216,4.79365079 9.39069048,6.79417418 9.27759175,9.30453585 L9.27272727,9.52092352 L9.272,12.1760408 L18.727,12.1760408 L18.7272727,9.52092352 C18.7272727,6.91012289 16.6108006,4.79365079 14,4.79365079 Z" fill="#d0d7db"></path></svg>
                        <p className='settings-list-text'>Privacidad</p>
                    </li>
                    <li className='settings-list' onClick={() => setChats(true)}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4.8384 8.45501L5 8.70356V9V17.8333C5 18.7538 5.7462 19.5 6.6667 19.5H20.3333C21.2538 19.5 22 18.7538 22 17.8333V6.66667C22 5.74619 21.2538 5 20.3333 5H2.5927L4.8384 8.45501ZM8 14.5C8 13.6716 8.67157 13 9.5 13H14.5C15.3284 13 16 13.6716 16 14.5C16 15.3284 15.3284 16 14.5 16H9.5C8.67157 16 8 15.3284 8 14.5ZM9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11H16.5C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8H9.5Z" fill="#d0d7db"></path><path d="M5 8.70356L5.41919 8.43101L5.5 8.55531V8.70356H5ZM4.8384 8.45501L4.41921 8.72756L4.41917 8.7275L4.8384 8.45501ZM2.5927 5L2.17347 5.27249L1.67137 4.5H2.5927V5ZM4.58081 8.9761L4.41921 8.72756L5.25759 8.18247L5.41919 8.43101L4.58081 8.9761ZM4.5 9V8.70356H5.5V9H4.5ZM4.5 17.8333V9H5.5V17.8333H4.5ZM6.6667 20C5.47006 20 4.5 19.0299 4.5 17.8333H5.5C5.5 18.4777 6.02234 19 6.6667 19V20ZM20.3333 20H6.6667V19H20.3333V20ZM22.5 17.8333C22.5 19.0299 21.53 20 20.3333 20V19C20.9777 19 21.5 18.4777 21.5 17.8333H22.5ZM22.5 6.66667V17.8333H21.5V6.66667H22.5ZM20.3333 4.5C21.53 4.5 22.5 5.47005 22.5 6.66667H21.5C21.5 6.02233 20.9777 5.5 20.3333 5.5V4.5ZM2.5927 4.5H20.3333V5.5H2.5927V4.5ZM4.41917 8.7275L2.17347 5.27249L3.01192 4.72751L5.25762 8.18252L4.41917 8.7275ZM9.5 13.5C8.94772 13.5 8.5 13.9477 8.5 14.5H7.5C7.5 13.3954 8.39543 12.5 9.5 12.5V13.5ZM14.5 13.5H9.5V12.5H14.5V13.5ZM15.5 14.5C15.5 13.9477 15.0523 13.5 14.5 13.5V12.5C15.6046 12.5 16.5 13.3954 16.5 14.5H15.5ZM14.5 15.5C15.0523 15.5 15.5 15.0523 15.5 14.5H16.5C16.5 15.6046 15.6046 16.5 14.5 16.5V15.5ZM9.5 15.5H14.5V16.5H9.5V15.5ZM8.5 14.5C8.5 15.0523 8.94772 15.5 9.5 15.5V16.5C8.39543 16.5 7.5 15.6046 7.5 14.5H8.5ZM7.5 9.5C7.5 8.39543 8.39543 7.5 9.5 7.5V8.5C8.94772 8.5 8.5 8.94772 8.5 9.5H7.5ZM9.5 11.5C8.39543 11.5 7.5 10.6046 7.5 9.5H8.5C8.5 10.0523 8.94772 10.5 9.5 10.5V11.5ZM16.5 11.5H9.5V10.5H16.5V11.5ZM18.5 9.5C18.5 10.6046 17.6046 11.5 16.5 11.5V10.5C17.0523 10.5 17.5 10.0523 17.5 9.5H18.5ZM16.5 7.5C17.6046 7.5 18.5 8.39543 18.5 9.5H17.5C17.5 8.94772 17.0523 8.5 16.5 8.5V7.5ZM9.5 7.5H16.5V8.5H9.5V7.5Z" fill="#d0d7db"></path></svg>
                        <p className='settings-list-text'>Chats</p>
                    </li>
                    <li className='settings-list' onClick={() => setNotifications(true)}>
                        <svg viewBox="0 0 24 24" height="27" width="27" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><path fill="#d0d7db" d="M12,21.7c0.9,0,1.7-0.8,1.7-1.7h-3.4C10.3,20.9,11.1,21.7,12,21.7z M17.6,16.5v-4.7 c0-2.7-1.8-4.8-4.3-5.4V5.8c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v0.6C8.2,7,6.4,9.1,6.4,11.8v4.7l-1.7,1.7v0.9h14.6v-0.9 L17.6,16.5z"></path></svg>
                        <p className='settings-list-text'>Notificaciones</p>
                    </li>
                    <li className='settings-list' onClick={() => setShortcuts(true)}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1"><path fill="#d0d7db" d="M 10.851562 12.648438 L 13.148438 12.648438 L 12 9 Z M 20 8.691406 L 20 6 C 20 4.898438 19.101562 4 18 4 L 15.308594 4 L 13.410156 2.101562 C 12.628906 1.320312 11.359375 1.320312 10.582031 2.101562 L 8.691406 4 L 6 4 C 4.898438 4 4 4.898438 4 6 L 4 8.691406 L 2.101562 10.589844 C 1.320312 11.371094 1.320312 12.640625 2.101562 13.421875 L 4 15.320312 L 4 18 C 4 19.101562 4.898438 20 6 20 L 8.691406 20 L 10.589844 21.898438 C 11.371094 22.679688 12.640625 22.679688 13.421875 21.898438 L 15.320312 20 L 18 20 C 19.101562 20 20 19.101562 20 18 L 20 15.308594 L 21.898438 13.410156 C 22.679688 12.628906 22.679688 11.359375 21.898438 10.578125 Z M 14.089844 15.398438 L 13.601562 14 L 10.398438 14 L 9.910156 15.398438 C 9.78125 15.761719 9.449219 16 9.070312 16 C 8.449219 16 8.019531 15.390625 8.230469 14.808594 L 10.671875 7.949219 C 10.871094 7.378906 11.398438 7 12 7 C 12.601562 7 13.128906 7.378906 13.339844 7.941406 L 15.78125 14.800781 C 15.988281 15.378906 15.558594 15.988281 14.941406 15.988281 C 14.550781 16 14.21875 15.761719 14.089844 15.398438 Z M 14.089844 15.398438 "></path></svg>
                        <p className='settings-list-text'>Atajos del teclado</p>
                    </li>
                    <li className='settings-list' onClick={() => setHelp(true)}>
                        <svg height="27" width="27" preserveAspectRatio="xMidYMid meet" fill="none"><path fill="#d0d7db" d="M11.95 18c.35 0 .65-.12.89-.36s.36-.54.36-.89-.12-.65-.36-.89a1.2 1.2 0 0 0-.89-.36c-.35 0-.65.12-.89.36a1.2 1.2 0 0 0-.36.89c0 .35.12.65.36.89s.54.36.89.36Zm.05 4a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm.1-14.3c.42 0 .78.13 1.09.4.3.27.46.6.46 1 0 .37-.11.7-.34.97-.22.29-.48.55-.76.8-.38.34-.72.7-1.01 1.1-.3.4-.44.85-.44 1.35 0 .24.09.43.26.6.18.15.38.23.62.23s.46-.08.63-.25c.18-.17.29-.38.34-.63a2 2 0 0 1 .45-.93c.23-.28.48-.54.75-.79.38-.37.71-.77.99-1.2.27-.43.41-.92.41-1.45 0-.85-.35-1.55-1.04-2.09A3.8 3.8 0 0 0 12.1 6c-.63 0-1.24.13-1.81.4a2.8 2.8 0 0 0-1.31 1.22.9.9 0 0 0-.12.64c.04.23.16.4.34.52.23.13.48.17.73.12a1 1 0 0 0 .62-.43 1.95 1.95 0 0 1 1.55-.77Z"></path></svg>
                        <p className='settings-list-text'>Ayuda</p>
                    </li>
                    <li className='settings-list' onClick={() => setExit(true)}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" ><path fill="#f25c6e" d="M16.6,8.1l1.2-1.2l5.1,5.1l-5.1,5.1l-1.2-1.2l3-3H8.7v-1.8h10.9L16.6,8.1z M3.8,19.9h9.1 c1,0,1.8-0.8,1.8-1.8v-1.4h-1.8v1.4H3.8V5.8h9.1v1.4h1.8V5.8c0-1-0.8-1.8-1.8-1.8H3.8C2.8,4,2,4.8,2,5.8v12.4 C2,19.1,2.8,19.9,3.8,19.9z"></path></svg>
                        <p className='settings-list-text log-out'>Cerrar sesión</p>
                    </li>
                </ul>
            </div>
            {account && <AccountContainer setAccount={setAccount} account={account}/>}
            {privacy && <PrivacyContainer setPrivacy={setPrivacy} privacy={privacy} />}
            {chats && <ChatsContainer setChats={setChats} chats={chats}/>}
            {notifications && <NotificationsContainer setNotifications={setNotifications} notifications={notifications}/>}
            {help && <HelpContainer setHelp={setHelp} help={help}/>}
            {shortcuts && <ShortcutsContainer setShortcuts={setShortcuts} shortcuts={shortcuts} />}
            {exit && <ExitContainer setExit={setExit} exit={exit}/>}
        </div>
    )
}

export default SettingsContainer
