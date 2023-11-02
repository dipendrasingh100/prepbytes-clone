import React, { useState } from 'react'
import "../../css/register-form.css"
import Register from "../../assets/images/ea/register.svg"
import { AiOutlineClose } from "react-icons/ai"

const RegisterForm = ({ show, setShow }) => {
    const [selected, setSelected] = useState(null)
    return (
        <div className='RegisterModal__container'>
            <div className="RegisterModalActive">
                <img src={Register} alt="register img" />
                <div className="RegisterModal-right">
                    <div className="RegisterModal__top">
                        <p className="RegisterModal__top-text-active">
                            Take a step towards your dream job
                        </p>
                        <AiOutlineClose onClick={() => setShow(false)} />
                    </div>

                    <form className="RegisterModal-form">
                        <div className="RegisterModal-form-main-active">
                            <div className="RegisterModal-form-main--right">
                                <div className="RegisterModal__form-container">
                                    <label>Highest Degree *</label>
                                    <select name="" id="" className="RegisterModal__form-select">
                                        <option value=""></option>
                                        <option value="B.Tech / BE">B.Tech / BE</option>
                                        <option value="BCA">BCA</option>
                                        <option value="BSc">BSc</option>
                                        <option value="BCom">BCom</option>
                                        <option value="BA">BA</option>
                                        <option value="B.Pharma">B.Pharma</option>
                                        <option value="B.Arch">B.Arch</option>
                                        <option value="BBA">BBA</option>
                                        <option value="Diploma">Diploma</option>
                                    </select>
                                </div>

                                <div className="RegisterModal__form-container">
                                    <label>Branch</label>
                                    <select name="" id="" className="RegisterModal__form-select">
                                        <option value=""></option>
                                        <option value="CSE/ IT">CSE/ IT</option>
                                        <option value="Electrical/Electronics">Electrical/Electronics</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div className="RegisterModal__form-working-professional">
                                    <label>Are you a Working Professional? *</label>
                                    <div className="RegisterModal__form-button">
                                        <div className={`RegisterModal__form-working-professional-button ${selected ? "RegisterModal__form-working-professional-selected-button" : ""}`} onClick={()=>setSelected(true)}>Yes</div>
                                        <div className={`RegisterModal__form-working-professional-button-no ${selected === false ? "RegisterModal__form-working-professional-selected-button-no" : ""}` } onClick={()=>setSelected(false)}>No</div>
                                    </div>
                                </div>

                                <div className="RegisterModal-form-accept-terms-and-conditions-container">
                                    <input type="checkbox" name="terms-and-conditions" className='RegisterModal-form-accept-terms-and-conditions-checkbox' defaultChecked />
                                    <div className="RegisterModal-form-accept-terms-and-conditions-label">
                                        I agree to the
                                        <a href="https://www.prepbytes.com/terms-and-conditions" className="RegisterModal-form-accept-terms-and-conditions-term">
                                            terms and conditions
                                        </a>
                                        .
                                    </div>
                                </div>

                                <div className="RegisterModal--button">
                                    <button className='RegisterModal--button-btn-active'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
