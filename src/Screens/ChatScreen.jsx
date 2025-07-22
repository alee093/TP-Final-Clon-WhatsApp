import React from 'react'
import ChatContainer from '../Components/ChatContainer/ChatContainer'
import { useProfileImage } from '../Context/ProfileImageContext'
import ProfileImage from '../Components/ProfileImage/ProfileImage'
import ChatsListContainer from '../Components/ChatsListContainer/ChatsListContainer'
import './ChatScreen.css'
import SideHeader from '../Components/SideHeader/SideHeader'

const ChatScreen = () => {
    const {profileImage} = useProfileImage()
    return (
        <div className='chat-screen-container'>
            <SideHeader />
            <ChatsListContainer />
            <ChatContainer />
            {profileImage && <ProfileImage />}
        </div>
    )
}

export default ChatScreen
