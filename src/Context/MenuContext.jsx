import { useContext, createContext, useState } from "react"

const MenuContext = createContext()

export const useMenu = () => useContext(MenuContext)

export const MenuProvider = ({children}) => {
    const [menu, setMenu] = useState(false)
    return (
        <MenuContext.Provider value={{menu, setMenu}}>
            {children}
        </MenuContext.Provider>
    )
}