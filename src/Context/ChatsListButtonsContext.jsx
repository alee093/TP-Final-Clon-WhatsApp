import { createContext, useContext, useState } from "react";

const ChatsListButtonsContext = createContext()

export const useChatsListButtons = () => useContext(ChatsListButtonsContext)

export const ChatsListButtonsProvider = ({children}) => {
    const [all, setAll] = useState(true)
    const [read, setRead] = useState(false)
    const [favorites, setFavorites] = useState(false)
    const [groups, setGroups] = useState(false)
    return (
        <ChatsListButtonsContext.Provider value={{all, setAll, read, setRead, favorites, setFavorites, groups, setGroups}}>
            {children}
        </ChatsListButtonsContext.Provider>
    )
}