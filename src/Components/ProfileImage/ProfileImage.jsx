import React from 'react'
import './ProfileImage.css'
import { useProfileImage } from '../../Context/ProfileImageContext'
import profile from '../../assets/aeropuerto-profile.png'
import {aeropuertoBot} from '../../utils/contact'

const ProfileImage = () => {
    const {setProfileImage} = useProfileImage()
    return (
        <div className='profile-image-screen-container'>
            <header className='profile-image-header'>
                <div className='image-name-container'>
                    <img src={profile} alt="profile" className='profile-image'/>
                    <h3 className='profile-image-name'>{aeropuertoBot.name}</h3>
                </div>
                <button className='chat-info-header-close-button' onClick={() => {setProfileImage(false)}}>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="chat-info-header-close-icon" fill="#8797a1"><title>x</title><path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path></svg>
            </button>
            </header>
            <div className='profile-image-body'>
                <img src={profile} alt="profile" className='profile-image-large'/>
            </div>
        </div>
    )
}

export default ProfileImage
