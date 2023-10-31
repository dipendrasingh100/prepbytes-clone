import React, { useState } from 'react'
import "../css/header.css"
import { Link } from 'react-router-dom'
import logo from "../assets/logoPrepBytes.svg"
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { useSelector } from 'react-redux'
import dashboardImg from "../assets/icons/dashboard.svg"

const Header = () => {
    const [click, setClick] = useState(false)
    const { isAuthenticated, user } = useSelector(state => state.user)
    const [options, setOptions] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <header className="header-container main-header">
            <div className="header-logo-container">
                <Link to="/" onClick={() => setClick(false)}>
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
                                    <Link to='/project/html'>HTML</Link>
                                    <Link to='/project/css'>CSS</Link>
                                    <Link to='/project/javascript'>JavaScript</Link>
                                    <Link to='/project/reactjs'>React JS</Link>
                                    <Link to='/project/nodejs'>Node JS</Link>
                                    <Link to='/project/mongodb'>MongoDB</Link>
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
                                        <Link to='/dashboard' className="options-item-box" >
                                            <div>
                                                <img src={dashboardImg} alt="dashboard" />
                                                <p className="options-item-text">My Dashboard</p>
                                            </div>
                                        </Link>

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

                    <div className="narrow-sub-conatiner main-header" style={{ display: `${click ? "block" : "none"}` }}>
                        <div className="narrow-navigations">
                            {isAuthenticated && <menu className='user header-mob' onClick={() => setOptions(!options)}>
                                <div className="user_name">
                                    <div className="group mob">
                                        <div className="avtar-circle">
                                            {user && user?.name[0].toUpperCase()}
                                        </div>
                                        <span className={click ? 'username' : ''}>Hi {user && user?.name.split(" ")[0]}</span>
                                    </div>
                                </div>
                                <div className="options" style={{ display: 'block', position: "static" }}>
                                    <div className="options-items">
                                        <Link to='/dashboard' className="options-item-box" >
                                            <div>
                                                <img src={dashboardImg} alt="dashboard" />
                                                <p className="options-item-text">My Dashboard</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </menu>}
                            <Link className='nav-link' to='/mock-tests' onClick={() => setClick(false)}>Mock Test</Link>
                            <Link className='nav-link' to='/preparation-videos' onClick={() => setClick(false)}>Video Tutorials</Link>
                            <Link className='nav-link' to='/master-competitive-programming' onClick={() => setClick(false)}>Master Competitive Programming</Link>
                            <Link className='nav-link' to='/online-full-stack-developer-mern-certification-program' onClick={() => setClick(false)}>Full Stack Program</Link>
                            <Link className='nav-link' to='/elevation-academy' onClick={() => setClick(false)}>Elevation Academy</Link>
                            <Link className='nav-link' to='/project/html' onClick={() => setClick(false)}>HTML</Link>
                            <Link className='nav-link' to='/project/css' onClick={() => setClick(false)}>CSS</Link>
                            <Link className='nav-link' to='/project/javascript' onClick={() => setClick(false)}>JavaScript</Link>
                            <Link className='nav-link' to='/project/reactjs' onClick={() => setClick(false)}>React JS</Link>
                            <Link className='nav-link' to='/project/nodejs' onClick={() => setClick(false)}>Node JS</Link>
                            <Link className='nav-link' to='/project/mongodb' onClick={() => setClick(false)}>MongoDB</Link>
                            {isAuthenticated ?
                                <div className="options-item-box logout" onClick={handleLogout}>
                                    <p >Logout</p>
                                </div> :
                                <Link className='nav-link-login' to='/login' onClick={() => setClick(false)}>Login/SignUp</Link>}

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
