import React from 'react'
import "../css/header.css"
import "../css/header2.css"
import { Link } from 'react-router-dom'
import logo from "../assets/logoPrepBytes.svg"

const Header2 = () => {
    return (
        <header className="header-container2">
            <div className="header-logo-container">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
        </header>
    )
}

export default Header2
