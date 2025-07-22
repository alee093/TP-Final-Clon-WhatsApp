import React from 'react'
import './DownloadScreen.css'
import DownloadContainer from '../../Components/DownloadContainer/DownloadContainer'
import ChatsListContainer from '../../Components/ChatsListContainer/ChatsListContainer'
import SideHeader from '../../Components/SideHeader/SideHeader'
import { useHeaderButtons } from '../../Context/HeaderButtonsContext'
import StatusContainer from '../../Components/StatusContainer/StatusContainer'
import ChannelsContainer from '../../Components/ChannelsContainer/ChannelsContainer'
import CommunityContainer from '../../Components/CommunityContainer/CommunityContainer'
import SettingsContainer from '../../Components/SettingsContainer/SettingsContainer'

const DownloadScreen = () => {
    const {chat, status, channels, community, settings, profile} = useHeaderButtons()
    return (
        <div className='download-screen-container'>
            <SideHeader />
            {chat && <ChatsListContainer />}
            {status && <StatusContainer />}
            {channels && <ChannelsContainer />}
            {community && <CommunityContainer />}
            {settings && <SettingsContainer />}
            <DownloadContainer />
        </div>
    )
}

export default DownloadScreen
