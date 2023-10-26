import React, { useEffect, useState } from 'react'
import "../css/header.css"
import { Link } from 'react-router-dom'
import logo from "../assets/logoPrepBytes.svg"
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { useSelector } from 'react-redux'
import dashboardImg from "../assets/icons/dashboard.svg"

const Header = () => {
    const [click, setClick] = useState(false)
    const { isLoading, isAuthenticated, error, user } = useSelector(state => state.user)
    const [options, setOptions] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <header className="header-container">
            <div className="header-logo-container">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <nav className="navbar-container">
                <div className="wide-container">
                    <div className="navbar-sub">
                        {!isAuthenticated && <div className="auth-container">
                            <Link to='/login' className='header-login-btn'>Login</Link>
                            <Link to='/register' className='header-signup-btn'>Sign up</Link>
                        </div>}
                        <div className="navigations">
                            <div className="dropdown">
                                <div className="drop-btn">
                                    Study Material
                                    <AiFillCaretDown className='svg-icon' />
                                </div>
                                <div className="dropdown-content">
                                    <Link to='/mock-tests'>Mock Test</Link>
                                    <Link to='/preparation-videos'>Video Tutorials</Link>
                                </div>
                            </div>
                            <div className="dropdown">
                                <div className="drop-btn">
                                    Courses and Programs
                                    <AiFillCaretDown className='svg-icon' />
                                </div>
                                <div className="dropdown-content">
                                    <Link to='/master-competitive-programming'>Master Competitive Programming</Link>
                                    <Link to='/online-full-stack-developer-mern-certification-program'>Full Stack Program</Link>
                                </div>
                            </div>
                            <div className='ea'><Link to='/elevation-academy'>Elevation Academy</Link></div>
                            <div className="dropdown">
                                <div className="drop-btn">
                                    Project
                                    <AiFillCaretDown className='svg-icon' />
                                </div>
                                <div className="dropdown-content project">
                                    <Link>HTML</Link>
                                    <Link>CSS</Link>
                                    <Link>JavaScript</Link>
                                    <Link>React JS</Link>
                                    <Link>Node JS</Link>
                                    <Link>MongoDB</Link>
                                </div>
                            </div>
                            {isAuthenticated && <menu className='user' onClick={() => setOptions(!options)}>
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
                                        <a href="" className="options-item-box" >
                                            <div>
                                                <img src={dashboardImg} alt="dashboard" />
                                                <p className="options-item-text">My Dashboard</p>
                                            </div>
                                        </a>

                                        <div className="options-item-box logout" onClick={handleLogout}>
                                            <p >Logout</p>
                                        </div>
                                    </div>
                                </div>
                            </menu>}
                        </div>
                    </div>
                </div>
                <div className="narrow-container" >
                    {click
                        ? <AiOutlineClose className='svg-icon' onClick={() => setClick(false)} style={{ marginTop: '25px' }} />
                        : <GiHamburgerMenu className='svg-icon' color='rgb(24, 107, 225)' onClick={() => setClick(true)} />
                    }

                    <div className="narrow-sub-conatiner" style={{ display: `${click ? "block" : "none"}` }}>
                        <div className="narrow-navigations">
                            <Link className='nav-link'>Mock Test</Link>
                            <Link className='nav-link'>Video Tutorials</Link>
                            <Link className='nav-link'>Master Competitive Programming</Link>
                            <Link className='nav-link'>Full Stack Program</Link>
                            <Link className='nav-link'>Elevation Academy</Link>
                            <Link className='nav-link'>HTML</Link>
                            <Link className='nav-link'>CSS</Link>
                            <Link className='nav-link'>JavaScript</Link>
                            <Link className='nav-link'>React JS</Link>
                            <Link className='nav-link'>Node JS</Link>
                            <Link className='nav-link'>MongoDB</Link>
                            <Link className='nav-link-login'>Login/SignUp</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
