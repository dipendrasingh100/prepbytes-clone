import React, { useState } from 'react'
import "../css/header.css"
import "../css/header3.css"
import { AiOutlineClose } from "react-icons/ai"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from 'react-router-dom'
import logo from "../assets/logoPrepBytes.svg"
import { useSelector } from 'react-redux'


const Header3 = ({ navClose, setNavClose }) => {
    const { user } = useSelector(state => state.user)
    const [options, setOptions] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <div className='header-container dashboard-header'>
            <div className={`header-left-container-web ${navClose ? "" : "header-nav-open"}`}>
                {navClose ?
                    <RxHamburgerMenu className='MuiSvgIcon-root' onClick={() => setNavClose(false)} /> :
                    <AiOutlineClose className='MuiSvgIcon-root' onClick={() => setNavClose(true)} />
                }
                <div className="header-logo-container dashboard-logo">
                    <Link to='/' id='web_logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to='/' id='mobile_logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
            <div className="header-left-container-mob header-nav-open">
                <AiOutlineClose className='MuiSvgIcon-root' />
                <div className="header-logo-container dashboard-logo">
                    <Link to='/' id='web_logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to='/' id='mobile_logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
            <nav className="navbar-container">
                <div className="dashboard-right-container">
                    <menu className='user' onClick={() => setOptions(!options)}>
                        <div className="user_name">
                            <div className="group">
                                <div className="avtar-circle">
                                    {user && user?.name[0].toUpperCase()}
                                </div>
                                <span>Hi {user && user?.name.split(" ")[0]}</span>
                            </div>
                        </div>
                        <div className="options" style={{ display: options ? 'block' : "none" }}>
                            <div className="options-items">

                                <div className="options-item-box logout" onClick={handleLogout}>
                                    <p >Logout</p>
                                </div>
                            </div>
                        </div>
                    </menu>
                </div>
                <div className="navbar_none">
                </div>
            </nav>
        </div>
    )
}

export default Header3
