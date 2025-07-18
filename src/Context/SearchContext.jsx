import { useContext, createContext, useState } from "react"

const SearchContext = createContext()

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState(false)
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}