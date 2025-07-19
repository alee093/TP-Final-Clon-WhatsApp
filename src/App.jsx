import './App.css'
import { InfoProvider } from './Context/InfoContext'
import { MessagesProvider } from './Context/MessagesContext'
import { ProfileImageProvider } from './Context/ProfileImageContext'
import { MenuProvider } from './Context/MenuContext'
import { SearchProvider } from './Context/SearchContext'
import AppRouter from './routes/AppRouter'
import { DownloadWindowProvider } from './Context/DownloadWindowContext'

function App() {

  return (
    <div>
      <DownloadWindowProvider>
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
      </DownloadWindowProvider>
    </div>
  )
}

export default App
