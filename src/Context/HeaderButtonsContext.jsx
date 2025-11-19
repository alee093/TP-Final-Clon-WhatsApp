import { useContext, createContext, useState } from "react"

const HeaderButtonsContext = createContext()

export const useHeaderButtons = () => useContext(HeaderButtonsContext)

export const HeaderButtonsProvider = ({children}) => {
    const [chat, setChat] = useState(true)
    const [status, setStatus] = useState(false)
    const [channels, setChannels] = useState(false)
    const [community, setCommunity] = useState(false)
    const [settings, setSettings] = useState(false)
    const [profile, setProfile] = useState(false)
    return (
        <HeaderButtonsContext.Provider value={{chat, setChat, status, setStatus, channels, setChannels, community, setCommunity, settings, setSettings, profile, setProfile}}>
            {children}
        </HeaderButtonsContext.Provider>
    )
}