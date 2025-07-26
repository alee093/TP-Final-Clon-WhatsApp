import React from 'react'
import './ChatHeader.css'
import { aeropuertoBot } from '../../services/contact'
import { useInfo } from '../../Context/InfoContext'
import { useMenu } from '../../Context/MenuContext'
import { useSearch } from '../../Context/SearchContext'
import { useHideComponents } from '../../Context/HideComponents'

const ChatHeader = () => {
    const {setInfo} = useInfo()
    const {menu, setMenu} = useMenu()
    const {setSearch} = useSearch()
    const {hide, setHide, hideChat, setHideChat, isMobile, setHideInfo, hideInfo, isLaptop} = useHideComponents()
    return (
        <header className='chat-header' style={{display: (isLaptop && hideInfo) ? 'none' : 'flex'}}>
            <span className='chat-header-back-icon' style={{display: isMobile ? 'flex' : 'none'}} onClick={() => {setHideChat(false), setHide(false)}}>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px"><path fill="#aebbc2" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
            </span>
            <img src="/images/aeropuerto-profile.png" alt="profile" className='chat-header-profile' onClick={() => {
                    setInfo(true)
                    setSearch(false)
                    setHideInfo(true)
                }}/>
            <div className='chat-header-name-menu-container'>
                <div className='chat-header-name-icon' onClick={() => {
                        setInfo(true)
                        setSearch(false)
                        setHideInfo(true)
                    }}>
                    <span className='chat-header-name'>{aeropuertoBot.name}</span>
                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" ><title>psa-verified</title><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg>
                </div>
                <div className='chat-header-menu-container'>
                    <button className='chat-header-search' onClick={() => {
                            setSearch(true)
                            setInfo(false)
                            setHideInfo(true)
                        }}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className='chat-header-search-icon' version="1.1" x="0px" y="0px"><title>search-alt</title><path fill="#aebbc2" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg>
                    </button>
                    <button className='chat-header-menu' onClick={() => {
                            setMenu(!menu)
                        }}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className='chat-header-menu-icon' version="1.1" x="0px" y="0px"><title>menu</title><path fill="#aebbc2" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default ChatHeader
