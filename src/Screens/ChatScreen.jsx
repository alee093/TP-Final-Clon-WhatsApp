import React from 'react'
import ChatContainer from '../Components/ChatContainer/ChatContainer'
import { useProfileImage } from '../Context/ProfileImageContext'
import ProfileImage from '../Components/ProfileImage/ProfileImage'

const ChatScreen = () => {
    const {profileImage} = useProfileImage()
    return (
        <div>
            <ChatContainer />
            {profileImage && <ProfileImage />}
        </div>
    )
}

export default ChatScreen
