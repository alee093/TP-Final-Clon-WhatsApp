import { createContext, useContext, useState, useRef } from 'react'

const MessagesContext = createContext()

export const useMessage = () => useContext(MessagesContext)

export const MessagesProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    const idCounter = useRef(1)

    const addMessage = (text, sender = 'user') => {
        const newMessage = {
            id: idCounter.current++,
            text,
            sender,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}),
        }
        setMessages(prev => [...prev, newMessage])

        if (sender === 'user') {
            handleBotResponse(text)
        }
    }

    const handleBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase()

        if (message.includes("estacionamiento")) {
            setTimeout(() => {
                addMessage("¿Qué querés hacer con el estacionamiento? Escribir: tiempo, tarifas o pagar.", "bot")
            }, 1000)
        }
        else if (message.includes("hola")) {
            setTimeout(() => {
                addMessage("Hola, ¿en que puedo ayudarte sobre su estacionamiento? Escribir: tiempo, tarifas o pagar.", "bot")
            }, 1000)
        }
        else if (message.includes("pagar")) {
            setTimeout(() => {
                addMessage("Perfecto, le genero el link de pago. https://mpago.la/1NmB529", "bot")
            }, 1000)
        }
        else if (message.includes("tiempo")) {
            setTimeout(() => {
                addMessage("Su vehiculo estuvo 5 horas en el estacionamiento.", "bot")
            }, 1000)
        }
        else if (message.includes("tarifas")) {
            setTimeout(() => {
                addMessage("Las tarifas son de $100 por hora.", "bot")
            }, 1000)
        }
        else if (message.includes("gracias")) {
            setTimeout(() => {
                addMessage("No te preocupes, estoy aqui para ayudarte!", "bot")
            }, 1000)
        }
        else if (message.includes("chau")) {
            setTimeout(() => {
                addMessage("Hasta luego!", "bot")
            }, 1000)
        }
        else{
            setTimeout(() => {
                addMessage("Perdón, no entiendo lo que me decís. 😕", "bot")
            }, 1000)
        }
    }

    const removeMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id))
    }

    return (
        <MessagesContext.Provider value={{ messages, addMessage, removeMessage, setMessages }}>
            {children}
        </MessagesContext.Provider>
    )
}
