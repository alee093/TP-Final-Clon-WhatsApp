import { BrowserRouter, Routes, Route } from 'react-router'
import ChatScreen from '../Screens/HomeScreen/ChatScreen'
import DownloadScreen from '../Screens/HomeScreen/DownloadScreen/DownloadScreen'

const AppRouter = () => (
        <Routes>
            <Route path="/" element={<DownloadScreen />} />
            <Route path="/home/status" element={<DownloadScreen />} />
            <Route path="/home/channels" element={<DownloadScreen />} />
            <Route path="/home/community" element={<DownloadScreen />} />
            <Route path="/home/settings" element={<DownloadScreen />} />
            <Route path="/home/profile" element={<DownloadScreen />} />
            <Route path="/home/chat" element={<ChatScreen />} />
        </Routes>
)

export default AppRouter