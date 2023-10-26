import React, { useEffect, useState } from 'react'
import { verifyEmail } from '../utils/email_pass_verify'
// import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, forgotPassword, clearMessage } from '../app/forgotPasswordSlice'
// import { ToastContainer, toast } from 'react-toastify'
// import { toastOptions } from '../utils/constants'
import "../css/forget_password.css"
import forgotPass from "../assets/forgot-pass.svg"

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [err, setErr] = useState("")
    const dispatch = useDispatch()

    const { isLoading, message, error } = useSelector(state => state.forgotPassword)

    const handleChange = (e) => {
        const { value } = e.target
        setEmail(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const checkEmail = verifyEmail(email)
        if (checkEmail) {
            dispatch(forgotPassword(email))
            setEmail("")
            setErr("")
        } else {
            setErr("Please Enter a valid Email")
        }
    }

    useEffect(() => {
        if (error) {
            setErr(error)
            // toast.error(error, toastOptions)
            // dispatch(clearError())
        }
        if (message) {
            // toast.success(message, toastOptions)
            // dispatch(clearMessage())
        }
    }, [dispatch, error, message])

    return (
        <>
            <div className="forgot-password-container">
                <div className="forgot-image-container">
                    <img src={forgotPass} alt="lock" />
                </div>
                <div className="forgot-password-heading">Forgot Your Password?</div>
                <div className="forgot-password-msg">
                    Enter your email below and we will send you an email with instruction to reset your password
                </div>
                <input type="text" placeholder='Email Address' value={email} onChange={handleChange} />
                <div className="forgot-password-button-container">
                    <div className="forgot-password-button" onClick={handleSubmit}>
                        Send Reset Link
                    </div>
                </div>
                <p className='forgot-pass-err'>{err}</p>
                <p className='forgot-pass-return-link'>Return to Sign In</p>
            </div>
        </>
    )
}

export default ForgotPassword
