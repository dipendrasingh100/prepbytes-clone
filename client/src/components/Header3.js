import React from 'react'
import "../css/header3.css"
import { AiOutlineClose } from "react-icons/ai"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from 'react-router-dom'
import logo from "../assets/logoPrepBytes.svg"


const Header3 = ({ navClose, setNavClose }) => {
    return (
        <div className='header-container dashboard-header'>
            <div className={`header-left-container-web ${navClose ? "" : "header-nav-open"}`}>
                {navClose ?
                    <RxHamburgerMenu className='MuiSvgIcon-root' onClick={()=>setNavClose(false)}/> :
                    <AiOutlineClose className='MuiSvgIcon-root' onClick={()=>setNavClose(true)}/>
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
                    <div className="dashboard-menu-list">
                        Coding Contest
                    </div>
                    <div className="dashboard-profile">
                        <div className="dashboard-profile-container">
                            <div className="user">
                                <div className="popup">

                                </div>
                                <div className="userName">
                                    <div className="jss39">
                                        <div className="MuiAvatar-root jss40">
                                            D
                                        </div>
                                        <span>Hi Dipendra</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar_none">
                </div>
            </nav>
        </div>
    )
}

export default Header3
