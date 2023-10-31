import React from 'react'
import "../css/elevation.css"
import RightArrow from "../assets/icons/right-arrow.svg"
import StartAssesment from "../assets/images/Start+Assesment.webp"
import FreeClass from "../assets/images/free_class.webp"
import BatchStart from "../assets/images/Batch+Starts.webp"


const Elevation = () => {
    return (
        <div className='elevationCourse'>
            <div className="elevationCourse-header">
                <section className="elevationCourse-header-main" style={{ backgroundColor: 'rgb(253, 240, 215)' }}>
                    <div className="left">
                        <h1>PrepBytes Elevation Academy - Full Stack Web Development Career</h1>
                        <p className="left-text">
                            Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.
                        </p>
                        <ul className="left-list">
                            <li>
                                <img src={RightArrow} alt="right-arrow" />
                                <p>Complete Live Class from experts</p>
                            </li>
                            <li>
                                <img src={RightArrow} alt="right-arrow" />
                                <p>Be the best Full stack developer</p>
                            </li>
                            <li>
                                <img src={RightArrow} alt="right-arrow" />
                                <p>Job Guarantee</p>
                            </li>
                        </ul>
                        <div className="left-buttons">
                            <button>Apply Now</button>
                            <button>Get a call back</button>
                        </div>
                    </div>
                    <div className="right">
                    </div>
                </section>
            </div>

            <section className="newBatch">
                <div className="newBatch-main">
                    <div className="left">
                        <p>For 2023, 2022 & 2021 graduates</p>
                        <p>Batch Starting: 1st May 2023</p>
                    </div>
                    <div className="right">
                        <div className="right-top">
                            <div className="right-point-outer">
                                <div className="newBatch-right-point-container">
                                    <img src={FreeClass} alt="free class" />
                                    <div className="newBatch-right-point-container-text">
                                        <span>Free Webinar</span>
                                        <span>17th April</span>
                                    </div>
                                </div>
                                <div className="NewBatch__main_right_point_container_connector_line_vertical"></div>
                            </div>
                            <div className="right-point-outer">
                                <div className="newBatch-right-point-container">
                                    <img src={StartAssesment} alt="start assesment" />
                                    <div className="newBatch-right-point-container-text">
                                        <span>1:1 Counselling session</span>
                                        <span>From 18th April</span>
                                    </div>
                                </div>
                                <div className="NewBatch__main_right_point_container_connector_line_vertical"></div>
                            </div>
                            <div className="right-point-outer">
                                <div className="newBatch-right-point-container">
                                    <img src={BatchStart} alt="batch start" />
                                    <div className="newBatch-right-point-container-text">
                                        <span>Batch Start</span>
                                        <span>01 May'23, Mon-Fri (7-10PM)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Elevation
