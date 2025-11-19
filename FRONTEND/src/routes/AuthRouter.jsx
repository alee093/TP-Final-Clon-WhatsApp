import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from '../Screens/LoginScreen/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen'
import AppRouter from './AppRouter'
import AuthMiddleware from '../Middleware/AuthMiddleware'

function AuthRouter() {


  return (
  <div>
    <Routes>
      <Route path="/" element={<LoginScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route element={<AuthMiddleware/>} >
        <Route path='/home' element={<AppRouter/>}/>
      </Route>
    </Routes>
  </div>
  )
}

export default AuthRouter