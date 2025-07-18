import './App.css'
import { InfoProvider } from './Context/InfoContext'
import { MessagesProvider } from './Context/MessagesContext'
import { ProfileImageProvider } from './Context/ProfileImageContext'
import { MenuProvider } from './Context/MenuContext'
import { SearchProvider } from './Context/SearchContext'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <div>
      <SearchProvider>
        <MenuProvider>
          <ProfileImageProvider>
            <InfoProvider>
              <MessagesProvider>
                <AppRouter />
              </MessagesProvider>
            </InfoProvider>
          </ProfileImageProvider>
        </MenuProvider>
      </SearchProvider>
    </div>
  )
}

export default App
