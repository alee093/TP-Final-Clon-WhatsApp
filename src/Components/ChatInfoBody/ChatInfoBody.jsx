import React from 'react'
import './ChatInfoBody.css'
import profile from '../../assets/aeropuerto-profile.png'
import {aeropuertoBot} from '../../utils/contact'
import { useProfileImage } from '../../Context/ProfileImageContext'

const ChatInfoBody = () => {
    const {setProfileImage} = useProfileImage()
    return (
        <div className='chat-info-body'>
            <div className='chat-info-profile-container'>
                <img src={profile} alt="profile" className='chat-info-profile' onClick={() => {setProfileImage(true)}}/>
                <h3 className='chat-info-profile-name'>{aeropuertoBot.name}
                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" className='chat-info-profile-verified'><title>psa-verified</title><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg>
                </h3>
                <span className='chat-info-profile-description'>{aeropuertoBot.description}</span>
                <div className='chat-info-share-container' onClick={() => {window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1", "_blank")}}>
                    <button className='chat-info-share-button'>
                        <svg viewBox="0 0 21 16" height="16" width="21" preserveAspectRatio="xMidYMid meet" className="chat-info-share-icon" fill="none"><title>forward-filled</title><path d="M12.778 1.31318C12.778 0.590175 13.651 0.228175 14.161 0.739175L20.206 6.79017C20.2813 6.8654 20.341 6.95472 20.3817 7.05304C20.4225 7.15136 20.4435 7.25675 20.4435 7.36317C20.4435 7.4696 20.4225 7.57499 20.3817 7.67331C20.341 7.77163 20.2813 7.86095 20.206 7.93617L14.161 13.9872C14.0476 14.1006 13.9032 14.1779 13.7459 14.2091C13.5886 14.2404 13.4256 14.2243 13.2775 14.1628C13.1294 14.1013 13.0028 13.9973 12.9139 13.8638C12.825 13.7304 12.7777 13.5735 12.778 13.4132V10.6812C7.68197 10.6812 3.94897 12.1362 1.17397 15.2922C0.927967 15.5712 0.471967 15.3342 0.571967 14.9762C2.00197 9.80317 5.49697 4.97218 12.778 3.93118V1.31318Z" fill="#008068"></path></svg>
                    </button>
                    <span className='chat-info-share-text'>Compartir</span>
                </div>
            </div>
            <div className='chat-info-body-number'>
                <span className='chat-info-body-number-text'>Info. y número de teléfono</span>
                <span className='chat-info-body-info'>{aeropuertoBot.info}</span>
                <span className='chat-info-body-cel'>{aeropuertoBot.cel}</span>
            </div>
        </div>
    )
}

export default ChatInfoBody
