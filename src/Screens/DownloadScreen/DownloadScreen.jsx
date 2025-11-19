import React, { useEffect} from 'react'
import { useLocation } from 'react-router'
import './DownloadScreen.css'
import DownloadContainer from '../../Components/DownloadContainer/DownloadContainer'
import ChatsListContainer from '../../Components/ChatsListContainer/ChatsListContainer'
import SideHeader from '../../Components/SideHeader/SideHeader'
import { useHeaderButtons } from '../../Context/HeaderButtonsContext'
import StatusContainer from '../../Components/StatusContainer/StatusContainer'
import ChannelsContainer from '../../Components/ChannelsContainer/ChannelsContainer'
import CommunityContainer from '../../Components/CommunityContainer/CommunityContainer'
import SettingsContainer from '../../Components/SettingsContainer/SettingsContainer'
import ProfileContainer from '../../Components/ProfileContainer/ProfileContainer'

const DownloadScreen = () => {
    const { pathname } = useLocation()
    const {chat, status, channels, community, settings, profile, setChat, setStatus, setChannels, setCommunity, setSettings, setProfile} = useHeaderButtons()


    useEffect(() => {
        // Primero apagamos todo
        setChat(false)
        setStatus(false)
        setChannels(false)
        setCommunity(false)
        setSettings(false)
        setProfile(false)

        // Después activamos el que corresponde según la URL
        if (pathname === '/chats') setChat(true)
        else if (pathname === '/status') setStatus(true)
        else if (pathname === '/channels') setChannels(true)
        else if (pathname === '/community') setCommunity(true)
        else if (pathname === '/settings') setSettings(true)
        else if (pathname === '/profile') setProfile(true)
        else setChat(true) // fallback por si va a "/"
    }, [pathname])
    return (
        <div className='download-screen-container'>
            <SideHeader />
            {chat && <ChatsListContainer />}
            {status && <StatusContainer />}
            {channels && <ChannelsContainer />}
            {community && <CommunityContainer />}
            {settings && <SettingsContainer />}
            {profile && <ProfileContainer />}
            <DownloadContainer />
        </div>
    )
}

export default DownloadScreen
