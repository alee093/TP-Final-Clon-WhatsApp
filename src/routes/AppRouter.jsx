import { BrowserRouter, Routes, Route } from 'react-router'
import ChatScreen from '../Screens/ChatScreen'

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/chat" element={<ChatScreen />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter