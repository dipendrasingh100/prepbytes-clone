import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from "./pages/NotFound"
import AuthLandingPage from './components/AuthLandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import RequireAuth from './components/RequireAuth'
import ForgotPassword from './components/ForgotPassword'
import Header2 from './components/Header2'
import VideoTut from './pages/VideoTut'
import Mock from './pages/Mock'
import CompetitiveCourse from './pages/CompetitiveCourse'
import FullStackCourse from './pages/FullStackCourse'
import Elevation from './pages/Elevation'
import Checkout from './components/Checkout'
import { useDispatch } from 'react-redux'
import { loadUser } from './app/userSlice'
import Dashboard from './pages/Dashboard'
import Header3 from './components/Header3'

const App = () => {
  const dispatch = useDispatch()
  const [navClose, setNavClose] = useState(false)


  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])


  return (
    <>
      <Routes>
        <Route path='/auth/forgotPassword' element={
          <>
            <Header2 />
            <ForgotPassword />
            <Footer />
          </>} />

        <Route element={<RequireAuth />} >
          <Route path='/dashboard' element={
            <>
              <Header3 navClose={navClose} setNavClose={setNavClose} />
              <Dashboard navClose={navClose} setNavClose={setNavClose} />
            </>} />
        </Route>

        <Route path='*' element={
          <>
            <Header />
            <Routes>
              <Route path='/login' element={<AuthLandingPage page="login" />} />
              <Route path='/register' element={<AuthLandingPage page="register" />} />

              <Route path='/' element={<Home />} />
              <Route path='/mock-tests' element={<Mock />} />
              <Route path='/preparation-videos' element={<VideoTut />} />
              <Route path='/master-competitive-programming' element={<CompetitiveCourse />} />
              <Route path='/online-full-stack-developer-mern-certification-program' element={<FullStackCourse />} />
              <Route path='/elevation-academy' element={<Elevation />} />
              <Route element={<RequireAuth />} >
                <Route path='/checkout/:course' element={<Checkout />} />
                {/* <Route path='' element={ } /> */}
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
