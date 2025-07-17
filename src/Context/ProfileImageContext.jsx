import react, { createContext, useContext, useState } from 'react'

const ProfileImageContext = createContext()

export const useProfileImage = () => useContext(ProfileImageContext)

export const ProfileImageProvider = ({children}) => {
    const [profileImage, setProfileImage] = useState(false)
    return (
        <ProfileImageContext.Provider value={{profileImage, setProfileImage}}>
            {children}
        </ProfileImageContext.Provider>
    )
}