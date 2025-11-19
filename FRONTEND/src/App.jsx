import './App.css'
import { MessagesProvider } from './Context/MessagesContext'
import { ProfileImageProvider } from './Context/ProfileImageContext'
import { MenuProvider } from './Context/MenuContext'
import { DownloadWindowProvider } from './Context/DownloadWindowContext'
import { HeaderButtonsProvider } from './Context/HeaderButtonsContext'
import { HideComponentsProvider } from './Context/HideComponents'
import { EditingProvider } from './Context/EditingContext'
import { BrowserRouter } from 'react-router'
import  AuthContextProvider  from './Context/AuthContext'
import AuthRouter from './routes/AuthRouter'

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
                      <BrowserRouter>
                        <AuthContextProvider>
                          <AuthRouter/>
                        </AuthContextProvider>
                      </BrowserRouter>
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
