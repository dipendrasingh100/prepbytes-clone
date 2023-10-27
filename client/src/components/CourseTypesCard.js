import React from 'react'
import ArrowBtn from "../assets/icons/arrow-btn.svg"

const CourseTypesCard = ({ back, innerImg, heading, text }) => {
    return (
        <div className="course-types-card">
            <div className="card-back">
                <img src={back} alt="background" />
            </div>
            <div className="card-inner">
                <div className="card-inner-img">
                    <img src={innerImg} alt="inner" />
                </div>
                <h2 style={{ color: text }}>{heading}</h2>
                <div className="card-inner-bottom">
                    <span className='arrow-btn'>
                        <img src={ArrowBtn} alt="arrow-btn" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CourseTypesCard
