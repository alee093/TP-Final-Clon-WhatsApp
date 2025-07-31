import { useState, useContext, createContext } from "react"
import { pepeBot } from "../services/contact"

const EditingContext = createContext()

export const useEditing = () => useContext(EditingContext)

export const EditingProvider = ({ children }) => {
    const [name, setName] = useState(pepeBot.name)
    const [info, setInfo] = useState(pepeBot.info)

    const [isEditingName, setIsEditingName] = useState(false)
    const [isEditingInfo, setIsEditingInfo] = useState(false)

    return (
        <EditingContext.Provider value={{ name, setName, info, setInfo, isEditingName, setIsEditingName, isEditingInfo, setIsEditingInfo }}>
            {children}
        </EditingContext.Provider>
    )
}
