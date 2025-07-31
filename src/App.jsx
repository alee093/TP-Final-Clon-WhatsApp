import './App.css'
import { InfoProvider } from './Context/InfoContext'
import { MessagesProvider } from './Context/MessagesContext'
import { ProfileImageProvider } from './Context/ProfileImageContext'
import { MenuProvider } from './Context/MenuContext'
import { SearchProvider } from './Context/SearchContext'
import AppRouter from './routes/AppRouter'
import { DownloadWindowProvider } from './Context/DownloadWindowContext'
import { ChatsListButtonsProvider } from './Context/ChatsListButtonsContext'
import { HeaderButtonsProvider } from './Context/HeaderButtonsContext'
import { HideComponentsProvider } from './Context/HideComponents'
import { EditingProvider } from './Context/EditingContext'

function App() {

  return (
    <div>
      <EditingProvider>
        <HideComponentsProvider>
          <HeaderButtonsProvider>
            <ChatsListButtonsProvider>
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
            </ChatsListButtonsProvider>
          </HeaderButtonsProvider>
        </HideComponentsProvider>
      </EditingProvider>
    </div>
  )
}

export default App
