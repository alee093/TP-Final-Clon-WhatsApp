import './App.css'
import { MessagesProvider } from './Context/MessagesContext'
import { ProfileImageProvider } from './Context/ProfileImageContext'
import { MenuProvider } from './Context/MenuContext'
import AppRouter from './routes/AppRouter'
import { DownloadWindowProvider } from './Context/DownloadWindowContext'
import { HeaderButtonsProvider } from './Context/HeaderButtonsContext'
import { HideComponentsProvider } from './Context/HideComponents'
import { EditingProvider } from './Context/EditingContext'

function App() {

  return (
    <div>
      <EditingProvider>
        <HideComponentsProvider>
          <HeaderButtonsProvider>
            <DownloadWindowProvider>
              <MenuProvider>
                <ProfileImageProvider>
                  <MessagesProvider>
                    <AppRouter />
                    </MessagesProvider>
                </ProfileImageProvider>
              </MenuProvider>
            </DownloadWindowProvider>
          </HeaderButtonsProvider>
        </HideComponentsProvider>
      </EditingProvider>
    </div>
  )
}

export default App
