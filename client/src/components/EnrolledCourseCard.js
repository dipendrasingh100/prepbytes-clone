import React from 'react'
import "../css/enrolled-course-card.css"
import EnrolledCard from "../assets/images/Enrolled-cc.png"
import ReactStars from "react-rating-stars-component"
import { reactStarsOptions } from '../utils/constants'

const EnrolledCourseCard = ({ title, description, thumb }) => {
    return (
        <div className='EnrolledCourseCard__container '>
            <img src={EnrolledCard} alt="enrolled course" />

            <div className="rating">
                <ReactStars {...reactStarsOptions} />
            </div>
            <div>
                <div className="thumb-container">
                    <img src={thumb} alt="thumb" />
                </div>
                <h3>{title}</h3>
            </div>
            <div className="EnrolledCourseCard__btn-container">
                <button>Go to course</button>
            </div>
        </div>
    )
}

export default EnrolledCourseCard
