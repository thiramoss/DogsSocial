import React from 'react'
import Header from './src/Components/Header'
import Footer from './src/Components/Footer'
import Home from './src/Components/Home'
import Login from './src/Components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserStorage } from './src/UserContext'
import User from './src/Components/User/User'
import Photo from './src/Components/Photo/Photo'
import ProtectedRoute from './src/Components/Helper/ProtectedRoute'
import UserProfile from './src/Components/User/UserProfile'
import NotFound from './src/Components/NotFound'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
