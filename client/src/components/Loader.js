import React from 'react'
import "../css/loader.css"
import Logo from "../assets/logo.webp"

const Loader = () => {
  return (
    <div className='loading'>
      <img src={Logo} alt="logo" />
    </div>
  )
}

export default Loader
