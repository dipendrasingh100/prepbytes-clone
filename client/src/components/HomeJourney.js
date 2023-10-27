import React from 'react'
import IndustryCurriculum from "../assets/icons/industry_vetted_curriculum.svg"
import Projects from "../assets/icons/real_life_projects.svg"
import Placement from "../assets/icons/exclusive_placement.svg"
import Journey1 from "../assets/images/journey1.svg"
import Journey2 from "../assets/images/journey2.svg"
import Journey3 from "../assets/images/journey3.svg"
import "../css/journey.css"

const HomeJourney = () => {
    return (
        <div>
            <section className="home-journey">
                <div className="home-journey-container">
                    <div className="left">
                        <p className="left--heading">Are you an Experienced Professional willing to Switch?</p>
                        <div className="left-tile-container">
                            <div className="left-tile">
                                <img src={IndustryCurriculum} alt="tile-icon" />
                                <p className='tile-text'>Industry vetted curriculum structured for you</p>
                            </div>
                            <div className="left-tile">
                                <img src={Projects} alt="tile-icon" />
                                <p className='tile-text'>Real life projects built on demand tech stack</p>
                            </div>
                            <div className="left-tile">
                                <img src={Placement} alt="tile-icon" />
                                <p className='tile-text'>Exclusive Placement Support team with job gurantee</p>
                            </div>
                        </div>
                        <p className="left-tile-container-text">
                            <span>PrepBytes Elevation Academy</span>
                            -  4 months Full Stack Program with Job Guarantee
                        </p>
                        <button className='left-tile-container-btn'>Know more</button>
                    </div>
                    <div className="right">
                        <div className="right-box">
                            <div className="right-box-left">
                                <img src={Journey1} alt="journey1" />
                            </div>
                            <div className="right-box-right">
                                <div className="top">
                                    <img src={Journey2} alt="journey2" />
                                </div>
                                <div className="bottom">
                                    <img src={Journey3} alt="journey3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeJourney
