import React, { useState } from 'react'
import PartnerLogo from "../assets/images/header-logo.svg"
import "../css/fullstack.css"

const FullStackCourse = () => {

    const [check, setCheck] = useState(0)
    return (
        <div className='fullStack-page-container'>
            <div className="fullStack-header">
                <section className="fullStack-main">
                    <div className="left">
                        <p>Partner with</p>
                        <div className="left-img-container">
                            <img src={PartnerLogo} alt="partner logo" />
                        </div>
                        <h1>Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
                        <p className="left-text">
                            Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.
                        </p>
                        <div className="left-buttons">
                            <button>Download Syllabus</button>
                        </div>
                    </div>

                    <div className="right">
                        <div className="fullStack-header-right-box">
                            <p className='box--heading'>Next Batch starts: 1st May, 2023</p>
                            <p className='box--text'>Limited seats available</p>
                        </div>
                        <div className="fullStack-header-right-box">
                            <p className='box--heading'>Program Duration:  4 - 5 months</p>
                            <p className='box--text'>15-20 hours/week</p>
                        </div>
                        <div className="fullStack-header-right-box">
                            <p className='box--heading'>Learning Format</p>
                            <p className='box--text'>Recorded Lectures + Online Live Classes</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="fullStack-batchDetails">
                <div className="batchDetails-container">
                    <h4>SELECT BATCH</h4>
                    <div className="batchDetails-section">
                        <div className="batchDetails-date-container">
                            <div className="batch-container">
                                <label className="batch-label">
                                    <input type="radio" value={0} checked={check === 0} onChange={() => setCheck(0)} />
                                    <span className='batch-text-container'>
                                        <h5>1st May</h5>
                                        <p>Enrolment Started</p>
                                    </span>
                                </label>
                            </div>
                            <div className="batchDetails-date-container">
                                <div className="batch-container">
                                    <label className="batch-label">
                                        <input type="radio" value={1} checked={check === 1} onChange={() => setCheck(1)} />
                                        <span className='batch-text-container'>
                                            <h5>15th May</h5>
                                            <p>Enrolment Started</p>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="batchDetails-enroll-container">
                            <div className="batchDetails-actprice">
                                ₹30000
                            </div>
                            <div className="batchDetails-atc-container">
                                <div className="enroll-now-btn">
                                    <button>Enroll Now</button>
                                </div>
                                <div className="try-free">
                                    <button>Try for free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullStackCourse
