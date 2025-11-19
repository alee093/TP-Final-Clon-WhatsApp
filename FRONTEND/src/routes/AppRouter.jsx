import { BrowserRouter, Routes, Route } from 'react-router'
import ChatScreen from '../Screens/HomeScreen/ChatScreen'
import DownloadScreen from '../Screens/HomeScreen/DownloadScreen/DownloadScreen'

const AppRouter = () => (
        <Routes>
            <Route path="/" element={<DownloadScreen />} />
            <Route path="/status" element={<DownloadScreen />} />
            <Route path="/channels" element={<DownloadScreen />} />
            <Route path="/community" element={<DownloadScreen />} />
            <Route path="/settings" element={<DownloadScreen />} />
            <Route path="/profile" element={<DownloadScreen />} />
            <Route path="/chat" element={<ChatScreen />} />
        </Routes>
)

export default AppRouter