import './App.css'
import { InfoProvider } from './Context/InfoContext'
import { MessagesProvider } from './Context/MessagesContext'
import { ProfileImageProvider } from './Context/ProfileImageContext'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <div>
      <ProfileImageProvider>
        <InfoProvider>
          <MessagesProvider>
            <AppRouter />
          </MessagesProvider>
        </InfoProvider>
      </ProfileImageProvider>
    </div>
  )
}

export default App
