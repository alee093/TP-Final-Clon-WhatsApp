import { useContext, createContext, useState } from "react";

const DownloadWindowContext = createContext()

export const useDownloadWindow = () => useContext(DownloadWindowContext)

export const DownloadWindowProvider = ({children}) => {
    const [downloadWindow, setDownloadWindow] = useState(false)
    return (
        <DownloadWindowContext.Provider value={{downloadWindow, setDownloadWindow}} >
            {children}
        </DownloadWindowContext.Provider>
    )
}