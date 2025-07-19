import React from 'react'
import './DownloadScreen.css'
import DownloadContainer from '../../Components/DownloadContainer/DownloadContainer'
import ChatsListContainer from '../../Components/ChatsListContainer/ChatsListContainer'

const DownloadScreen = () => {
    return (
        <div className='download-screen-container'>
            <ChatsListContainer />
            <DownloadContainer />
        </div>
    )
}

export default DownloadScreen
