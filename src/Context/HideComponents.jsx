import { useContext, createContext, useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

const HideComponentsContext = createContext()

export const useHideComponents = () => useContext(HideComponentsContext)

export const HideComponentsProvider = ({ children }) => {
    const [hide, setHide] = useState(true)
    const [hideChat, setHideChat] = useState(true)
    const [hideInfo, setHideInfo] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isLaptop = useMediaQuery({ query: '(max-width: 1100px)' })

    return (
        <HideComponentsContext.Provider value={{ hide, setHide, hideChat, setHideChat, isMobile, setHideInfo, hideInfo, isLaptop }}>
            {children}
        </HideComponentsContext.Provider>
    )
}