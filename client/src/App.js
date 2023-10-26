import React from 'react'
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

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/auth/forgotPassword' element={
          <>
            <Header2 />
            <ForgotPassword />
          </>} />

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
              <Route path='/checkout/:course' element={<Checkout />} />

              <Route element={<RequireAuth />} >
                {/* <Route path='' element={ } /> */}
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
