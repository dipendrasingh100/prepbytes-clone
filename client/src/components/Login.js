import React, { useEffect, useRef, useState } from 'react'
import MetaData from './MetaData'
import "../css/login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../app/userSlice'
import { verifyEmail } from '../utils/email_pass_verify'
import { handleLink } from '../utils/helperFuction'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passRef = useRef()
  const [inputdata, setInput] = useState({ email: "", password: "" })
  const [errordata, setError] = useState({ email: "", password: "" })
  const [otherErr, setOtherErr] = useState("")

  const { isAuthenticated, error } = useSelector(state => state.user)

  const from = location.state?.from?.pathname || "/"
  const handleSubmit = (e) => {
    e.preventDefault()
    const checkEmail = verifyEmail(inputdata.email)

    if (checkEmail) {
      dispatch(login(inputdata))
    } else {
      setError({ ...errordata, email: "please provide a valid email address" })
    }
  }
  useEffect(() => {
    handleLink()
    if (error) {
      setOtherErr(error)
    }
    if (isAuthenticated) {
      navigate(from)
    }
  }, [error, from, isAuthenticated, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    //to remove the warnings
    setError({ ...errordata, [name]: "" })

    const data = { ...inputdata, [name]: value }
    setInput(data)
  }
  return (
    <>
      <MetaData title='Sign in to your account - PrepBytes' />
      <div className="right-form-container">
        <div className="form-heading">
          <h1>Sign in to your account</h1>
        </div>
        <div className="form-data">
          <form autoComplete='off' onSubmit={handleSubmit}>
            <div className="inp-container">
              <input type="email" name='email' required ref={emailRef} value={inputdata.email} onChange={handleChange} autoComplete='off' />
              <label>Email</label>
              <p>{errordata.email}</p>
            </div>
            <div className="inp-container">
              <input type="password" name='password' required ref={passRef} value={inputdata.password} onChange={handleChange} />
              <label>Password</label>
              <p>{errordata.password}</p>
            </div>

            <div className="form-forgot">
              <Link to="/auth/forgotPassword">Forgot your password?</Link>
            </div>

            <button type="submit" className='form-signin-btn'>SIGN IN</button>
            <button className='form-otp-btn'>Login Via OTP</button>
            <div>
              <p className='form-status'>{otherErr}</p>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Login
