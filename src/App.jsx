import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WeatherApp from './Components/WeatherApp/WeatherApp'

const App = () => {
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const userrole = sessionStorage.getItem('userrole')

  return (
    <>
      <ToastContainer />
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<WeatherApp />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/fuck' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogdetails' element={<BlogDetails />} />
          <Route path='/forecast' element={<ForecastCard />} /> */}

          {/* <Route path='/blogform' element={<BlogForm />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
