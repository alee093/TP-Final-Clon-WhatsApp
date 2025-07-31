import React from 'react'
import './ProfileContainer.css'
import { useEditing } from '../../Context/EditingContext'

const ProfileContainer = () => {
    const { name, setName, info, setInfo, isEditingName, setIsEditingName, isEditingInfo, setIsEditingInfo } = useEditing()

    const handleBlurOrEnter = (event, type) => {
        if (event.type === 'blur' || event.key === 'Enter') {
            if (type === 'name') setIsEditingName(false)
            if (type === 'info') setIsEditingInfo(false)
        }
    }

    return (
        <div className='status-container'>
            <header className='channels-header'>
                <h1 className='chats-list-header-title'>Perfil</h1>
            </header>
            <div className='profile-body-container'>
                <div className='profile-image-container'>
                    <img src="/images/pepe-profile.jpg" alt="profile" className='profile-image-large'/>
                </div>
                <div className='profile-info-container'>
                    <span className='profile-your-name'>Tu nombre</span>
                    <span className='profile-name'>
                        {isEditingName ? (
                            <form className='profile-edit-form'>
                                <input
                                    autoFocus
                                    className='profile-edit-input'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={(e) => handleBlurOrEnter(e, 'name')}
                                    onKeyDown={(e) => handleBlurOrEnter(e, 'name')}
                                    maxLength={20}
                                />
                                <button type='submit' className='profile-edit-button'>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="#8797a1" d="M9,17.2l-4-4l-1.4,1.3L9,19.9L20.4,8.5L19,7.1L9,17.2z"></path></svg>
                                </button>
                            </form>
                        ) : (
                            <>
                                {name}
                                <button className='profile-edit-button' onClick={() => setIsEditingName(true)}>
                                    <svg viewBox="0 0 24 24" height="24" width="24"><path fill="#8797a1" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"/></svg>
                                </button>
                            </>
                        )}
                    </span>
                    <span className='profile-warning'>Este no es tu nombre de usuario o PIN. Este nombre será visible para tus contactos de WhatsApp</span>
                    <span className='profile-your-name'>Info.</span>
                    <span className='profile-name'>
                        {isEditingInfo ? (
                            <form className='profile-edit-form'>
                                <input
                                    autoFocus
                                    className='profile-edit-input'
                                    value={info}
                                    onChange={(e) => setInfo(e.target.value)}
                                    onBlur={(e) => handleBlurOrEnter(e, 'info')}
                                    onKeyDown={(e) => handleBlurOrEnter(e, 'info')}
                                    maxLength={40}
                                />
                                <button type='submit' className='profile-edit-button'>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="#8797a1" d="M9,17.2l-4-4l-1.4,1.3L9,19.9L20.4,8.5L19,7.1L9,17.2z"></path></svg>
                                </button>
                            </form>
                        ) : (
                            <>
                                {info}
                                <button className='profile-edit-button' onClick={() => setIsEditingInfo(true)}>
                                    <svg viewBox="0 0 24 24" height="24" width="24"><path fill="#8797a1" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"/></svg>
                                </button>
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileContainer
