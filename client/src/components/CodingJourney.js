import React from 'react'
import StudentHome from "../assets/images/student-home.svg"
import DownArrowRight from "../assets/down-arrow-right.svg"
import DownArrowLeft from "../assets/down-arrow-left.svg"
import PersonlizedLearning from "../assets/icons/personalised_learning.svg"
import PersonlizedPractice from "../assets/icons/personalised_practice.svg"
import CodeLive from "../assets/icons/code_live_with_experts.svg"
import Achievement from "../assets/icons/achieve_your_coding_dream.svg"
import DoubtIcon from "../assets/icons/ask_doubts_totally_live.svg"
import "../css/coding_journey.css"

const CodingJourney = () => {
    return (
        <div>
            <section className='coding-journey'>
                <div className="coding-journey-container">
                    <div className="coding-journey-left">
                        <img src={StudentHome} alt="student home" />
                    </div>
                    <div className="coding-journey-right">
                        <p className="coding-journey-right--heading">
                            How PrepBytes Mentorship driven Personalised Learning works?
                        </p>

                        <div className="coding-journey-right-container">
                            <div className="coding-journey-right-container-card-one">
                                <div className="left">
                                    <p className="left--heading">
                                        Personalised Lectures & Weekly Plan
                                    </p>
                                    <div className="left-box" style={{ background: "rgb(253,240,215)", border: "1px dashed rgb(247,128,119)" }}>
                                        <img src={PersonlizedLearning} alt="PersonlizedLearning" />
                                        <p style={{ color: "rgb(247, 128, 119)" }}>Get learning videos & weekly plan based on your coding skills</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={DownArrowRight} alt="down-arrow" />
                                </div>
                            </div>

                            <div className="coding-journey-right-container-card-two">
                                <div className="left">
                                    <img src={DownArrowLeft} alt="DownArrowLeft" />
                                </div>
                                <div className="right">
                                    <p className="right--heading" style={{ color: "rgb(253, 205, 6)" }}>
                                        Personalised Lectures & Weekly Plan
                                    </p>
                                    <div className="right-box" style={{ background: "rgb(253,240,228)", border: "1px dashed rgb(253,205,6)" }}>
                                        <img src={CodeLive} alt="CodeLive" />
                                        <p style={{ color: "rgb(253, 205, 6)" }}>Get learning videos & weekly plan based on your coding skills</p>
                                    </div>
                                </div>
                            </div>

                            <div className="coding-journey-right-container-card-one">
                                <div className="left">
                                    <p className="left--heading" style={{ color: "rgb(15,181,130)" }}>
                                        Doubt Solving by Coding Experts
                                    </p>
                                    <div className="left-box" style={{ background: "rgb(228,246,241)", border: "1px dashed rgb(15,181,130)" }}>
                                        <img src={DoubtIcon} alt="DoubtIcon" />
                                        <p style={{ color: "rgb(15, 181, 130)" }}>Getting Stuck While Coding? Get all your doubts resolved.</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={DownArrowRight} alt="down-arrow" />
                                </div>
                            </div>

                            <div className="coding-journey-right-container-card-two">
                                <div className="left">
                                    <img src={DownArrowLeft} alt="DownArrowLeft" />
                                </div>
                                <div className="right">
                                    <p className="right--heading" style={{ color: "rgb(240, 119, 149)" }}>
                                        CODE LIVE WITH Top Coders
                                    </p>
                                    <div className="right-box" style={{ background: "background: rgb(255, 231, 237)", border: "1px dashed rgb(240, 119, 149)" }}>
                                        <img src={PersonlizedPractice} alt="PersonlizedPractice" />
                                        <p style={{ color: "rgb(240, 119, 149)" }}>Get learning videos & weekly plan based on your coding skills</p>
                                    </div>
                                </div>
                            </div>

                            <div className="coding-journey-right-container-card-three">
                                <img src={Achievement} alt="Achievement" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CodingJourney
