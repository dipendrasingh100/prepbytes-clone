import React, { useEffect } from 'react'
import "../css/competitive-course.css"
import ApplyNow from "../assets/icons/ApplyNow.svg"
import MCPImg from "../assets/images/mcp-header-image.webp"
import MCPUspOne from "../assets/images/mcp-usp-one.webp"
import MCPUspTwo from "../assets/images/mcp-usp-two.webp"
import MCPUspThree from "../assets/images/mcp-usp-three.webp"
import MCPUspFour from "../assets/images/mcp-usp-four.webp"
import CourseHighlightCard from '../components/CourseHighlightCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../app/cartSlice'
import { handleLink } from '../utils/helperFuction'
import { getCourse } from '../app/courseSlice'


const CompetitiveCourse = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { course } = useSelector(state => state.course)

    useEffect(() => {
        handleLink()
        dispatch(getCourse("master competitive programming"))
    }, [dispatch])


    const handleEnroll = () => {
        dispatch(addToCart({ title: course.title, image: course.thumb, price: course.price, description: course.description , type:"course"}))
        localStorage.setItem("from", "/master-competitive-programming")
        navigate(`/checkout/${course.title}`)
    }
    return (
        <div className='course-page-container'>
            <div className="course-page-header">
                <div className="course-page-header--fixed-btn-container">
                    <img src={ApplyNow} alt="Apply now Img" />
                    <div>Enroll Now</div>
                </div>
                <div className="course-page-header-container">
                    <div className="left">
                        <div className="left--heading">
                            <h1>MASTER COMPETITIVE PROGRAMMING</h1>
                            <h6>Master Competitive Programming Fom Zero And Become A Top-Rated Coder
                                <p> Under The Guidance Of Top Competitive Programmers</p>
                            </h6>
                            <button className="enroll-btn" onClick={handleEnroll}>Enroll Now</button>
                        </div>
                    </div>
                    <div className="right">
                        <img src={MCPImg} alt="masthead" />
                    </div>
                </div>
            </div>

            <div className="course-highlights-main">
                <div className="course-highlights-sub-container">
                    <CourseHighlightCard icon={MCPUspOne} text='9 months intensive bootcamp' color='#df3897' />
                    <CourseHighlightCard icon={MCPUspTwo} text='Quick doubt resolution' color='#0398d3' />
                    <CourseHighlightCard icon={MCPUspThree} text='Live coding sessions with top-rated coders' color='#7914a3' />
                    <CourseHighlightCard icon={MCPUspFour} text='Get certificate on course completion' color='#eb9a00' />
                </div>
            </div>
        </div>
    )
}

export default CompetitiveCourse
