import React, { useEffect, useRef, useState } from 'react'
import MetaData from './MetaData'
import { AiFillCaretDown } from "react-icons/ai"
import { register } from '../app/userSlice'
import { verifyEmail, verifyPass } from '../utils/email_pass_verify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [inputdata, setInput] = useState({ name: "", mobile: "", email: "", password: "", college: "", passing_year: "" })
  const [errordata, setError] = useState({ email: "", password: "", other: "" })

  const { isLoading, isAuthenticated, error } = useSelector(state => state.user)
  const checkBox = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const checkEmail = verifyEmail(inputdata.email)
    const passwordCheck = verifyPass(inputdata.password)

    if (checkEmail && passwordCheck) {
      dispatch(register(inputdata))

    } else {
      //Minimum eight characters, at least one letter and one number:
      if (!passwordCheck) {
        setError({ ...errordata, password: "password must contain minimum eight characters, at least one special character and one number" })
      }
      if (!checkEmail) {
        setError({ ...errordata, email: "please provide a valid email address" })
      }
    }
  }

  useEffect(() => {
    if (error) {
      setError({ ...errordata, other: error })
    }

    if (isAuthenticated) {
      navigate('/')
    }

  }, [dispatch, error, isAuthenticated, navigate, errordata])

  const handleChange = (e) => {
    const { name, value } = e.target
    //to remove the warnings
    setError({ ...errordata, [name]: "", other: "" })

    const data = { ...inputdata, [name]: value }
    setInput(data)
  }

  return (
    <>
      <MetaData title='Sign Up to Access Your PrepBytes Account.' />
      <div className="right-form-container">
        <div className="form-heading">
          <h1>Create your new account</h1>
        </div>
        <div className="form-data">
          <form autoComplete='off' onSubmit={handleSubmit}>
            <div className="inp-container" onSubmit={handleSubmit}>
              <input type="text" name='name' required value={inputdata.name} onChange={handleChange} />
              <label>Name</label>
              <p>{ }</p>
            </div>
            <div className="inp-container">
              <input type="email" name='email' required value={inputdata.email} onChange={handleChange} />
              <label>Email</label>
              <p>{errordata.email}</p>
            </div>
            <div className="inp-container">
              <input type="text" name='mobile' required value={inputdata.mobile} onChange={handleChange} />
              <label>Phone no.</label>
              <p>{ }</p>
            </div>
            <div className="inp-container">
              <input type="password" name='password' required value={inputdata.password} onChange={handleChange} />
              <label>Password</label>
              <p>{errordata.password}</p>
            </div>

            <div className="college">
              <div className="inp-container">
                <input type="text" name='college' required value={inputdata.college} onChange={handleChange} />
                <label>College</label>
                <p>{ }</p>
              </div>
              <div className="inp-container">
                <select name="passing_year" value={inputdata.passing_year} onChange={handleChange}>
                  <option value=""></option>
                  <option value="2028">2028</option>
                  <option value="2027">2027</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1195">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                </select>
                <label>Passing Year</label>
                <AiFillCaretDown color='#00a5ec' />
                <p>{ }</p>
              </div>
            </div>

            <div className="form-t-c">
              <input type="checkbox" name="terms-and-conditions" defaultChecked ref={checkBox} />
              <span>
                I agree to the
                <a href=""> terms and conditions</a>
              </span>
            </div>

            <button type="submit" className='form-signin-btn' >SIGN UP</button>
            <div>
              <p className='form-status'>{errordata.other}</p>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Register
