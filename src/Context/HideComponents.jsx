import { useContext, createContext, useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

const HideComponentsContext = createContext()

export const useHideComponents = () => useContext(HideComponentsContext)

export const HideComponentsProvider = ({ children }) => {
    const [hideInfo, setHideInfo] = useState(false)
    const isLaptop = useMediaQuery({ query: '(max-width: 1150px)' })

    return (
        <HideComponentsContext.Provider value={{ setHideInfo, hideInfo, isLaptop }}>
            {children}
        </HideComponentsContext.Provider>
    )
}