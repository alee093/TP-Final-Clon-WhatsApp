import React, { useContext, createContext, useState} from 'react'

const InfoContext = createContext()

export const useInfo = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    const [info, setInfo] = useState(false)
    return (
        <InfoContext.Provider value={{info, setInfo}}>
            {children}
        </InfoContext.Provider>
    )
}