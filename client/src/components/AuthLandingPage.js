import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { logout } from '../app/userSlice'
import Register from './Register'
import Login from "./Login"
import leftImg from "../assets/images/illustrated.webp"
import Minilogo from "../assets/images/logo.webp"
import students from "../assets/images/students.webp"
import college from "../assets/images/college.webp"
import learning from "../assets/images/learning.webp"
import social from "../assets/images/social.webp"
import "../css/auth.css"


const AuthLandingPage = ({ page }) => {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const [status, setStatus] = useState(true)

    useEffect(() => {
        if (page === 'logout') {
            // dispatch(logout())
            navigate('/')
        } else {
            setStatus(page === 'login');
        }
    }, [page, navigate]);

    return (
        <div className="auth flex center h-100">
            <div className="auth-container2">
                <div className='left'>
                    <div className="left-img">
                        <img src={leftImg} alt="leftImage" />
                    </div>
                    <div className="left-achievements">
                        <img src={Minilogo} alt="logo" />
                        <div className="achievement-container">
                            <img src={students} alt="students" />
                            <div className="achievement-detail">
                                <p>10K+</p>
                                <p>Students Enrolled</p>
                            </div>
                        </div>
                        <div className="achievement-container">
                            <img src={college} alt="college" />
                            <div className="achievement-detail">
                                <p>1000+</p>
                                <p>React in Colleges</p>
                            </div>
                        </div>
                        <div className="achievement-container">
                            <img src={learning} alt="learning" />
                            <div className="achievement-detail">
                                <p>10K+</p>
                                <p>Hours of Learning</p>
                            </div>
                        </div>
                        <div className="achievement-container">
                            <img src={social} alt="social" />
                            <div className="achievement-detail">
                                <p>150K+</p>
                                <p>Social Community</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className="right-header">
                        <div className="header-links">
                            <div className={`signup-cont ${status ? "" : "selected"}`}>
                                <Link to='/register'>SIGNUP</Link>
                            </div>
                            <div className={`login-cont ${status ? "selected" : ""}`}>
                                <Link to='/login'>LOGIN</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-form">
                        {status ? <Login /> : <Register />}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AuthLandingPage
