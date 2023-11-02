import React, { useEffect, useState } from 'react'
import "../css/competitive-course.css"
import ApplyNow from "../assets/icons/ApplyNow.svg"
import MCPImg from "../assets/images/mcp-header-image.webp"
import MCPUspOne from "../assets/images/mcp-usp-one.webp"
import MCPUspTwo from "../assets/images/mcp-usp-two.webp"
import MCPUspThree from "../assets/images/mcp-usp-three.webp"
import MCPUspFour from "../assets/images/mcp-usp-four.webp"
import CourseHighlightCard from '../components/mcp/CourseHighlightCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../app/cartSlice'
import { handleLink } from '../utils/helperFuction'
import { getCourse } from '../app/courseSlice'
import MentorCard from '../components/mcp/MentorCard'
import Company1 from "../assets/images/mentors/Mentor-Company1.webp"
import Company2 from "../assets/images/mentors/Mentor-Company2.webp"
import Company3 from "../assets/images/mentors/Mentor-Company3.webp"
import M1 from "../assets/images/mentors/Mentor_Mamta.webp"
import M2 from "../assets/images/mentors/Mentor_Kushdeep.webp"
import M3 from "../assets/images/mentors/Mentor_Aveek.webp"
import MCPFeatures from "../assets/images/mcp-features.svg"
import Vecto2 from "../assets/images/mcp/Vecto2.webp"
import One from "../assets/images/mcp/1.webp"
import Two from "../assets/images/mcp/2.webp"
import Three from "../assets/images/mcp/3.webp"
import Four from "../assets/images/mcp/4.webp"
import MCPFeatureCard from '../components/mcp/MCPFeatureCard'
import f1 from "../assets/icons/mcp/Icons_Personalised+Program.webp"
import f2 from "../assets/icons/mcp/Icons_Expert+Mentors.webp"
import f3 from "../assets/icons/mcp/Icons_Quick+Doubt+Support.webp"
import f4 from "../assets/icons/mcp/Icons_Get+certificate-01.webp"
import f5 from "../assets/icons/mcp/Icons_250+Coding+Questions.webp"
import f6 from "../assets/icons/mcp/Icons_20+Live+Coding+Sessions.webp"
import f7 from "../assets/icons/mcp/Icons_80+Hours+of+Videos.webp"
import f8 from "../assets/icons/mcp/Icons_80+Tech-Apti+MCQ+Tests.webp"
import Stats from '../components/mcp/Stats'
import MCPnetwork from "../assets/icons/mcp/MCP-company-new.webp"
import MCPSyllabus from '../components/mcp/MCPSyllabus'
import MCPTestimonial from '../components/mcp/MCPTestimonial'
import CourseHighlightCardEnd from '../components/mcp/CourseHighlightCardEnd'
import Loader from '../components/Loader'
import MetaData from '../components/MetaData'


const CompetitiveCourse = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { course, isLoading } = useSelector(state => state.course)
    const [batch, setBatch] = useState(1)

    useEffect(() => {
        handleLink()
        dispatch(getCourse("master competitive programming"))
    }, [dispatch])


    const handleEnroll = () => {
        dispatch(addToCart({ title: course.title, image: course.thumb, price: course.price, description: course.description, type: "course" }))
        localStorage.setItem("from", "/master-competitive-programming")
        navigate(`/checkout/${course.title}`)
    }

    const handleClick = () => {
        const element = document.getElementById('CoursePageBatchDetails__section_main_container_id');
        element.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            {
                isLoading ? <Loader /> :
                    <div className='course-page-container'>
                        <MetaData title='Placement Preparations | PrepBytes' />

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
                                        <button className="enroll-btn" onClick={handleClick}>Enroll Now</button>
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

                        <div className="course-mentors-main">
                            <h5>Get Guidance From Industry Leading Mentors</h5>
                            <div className="course-mentors-other-container">
                                <h5>Other Mentors You Will Be Interacting With</h5>
                                <div className="slick-slider">
                                    <div className="slick-list">
                                        <div className="slick-track">
                                            <MentorCard name='Mamta' profile={M1} role='Co-Founder, PrepBytes' compimg={Company1} />
                                            <MentorCard name='Kushdeep' profile={M2} role='SDE, ShareChat' compimg={Company2} />
                                            <MentorCard name='Aveek' profile={M3} role='Mentor, PrepBytes' compimg={Company3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="CoursePageMentors__other-mentor-heading-mbl">
                                Other Mentors You Will Be Interacting With
                            </div>

                            <div className="CoursePageMentors__other-mentor-container-mbl" style={{ height: "420px", bottom: "-400px" }}>
                                <div className="CoursePageMentors__card-mbl">
                                    <img src={M1} alt="profile" />
                                    <div className="mentor-slider-details">
                                        <h4>Mamta</h4>
                                        <p>Co-Founder, PrepBytes</p>
                                        <img src={Company1} alt="company" />
                                    </div>
                                </div>
                                <div className="CoursePageMentors__card-mbl">
                                    <img src={M2} alt="profile" />
                                    <div className="mentor-slider-details">
                                        <h4>Kushdeep</h4>
                                        <p>SDE, ShareChat</p>
                                        <img src={Company2} alt="company" />
                                    </div>
                                </div>
                                <div className="CoursePageMentors__card-mbl">
                                    <img src={M3} alt="profile" />
                                    <div className="mentor-slider-details">
                                        <h4>Aveek</h4>
                                        <p>Mentor, PrepBytes</p>
                                        <img src={Company3} alt="company" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="coreFeatures-main-section">
                            <h2>
                                <span>Master Competitive Programming With Us</span>
                            </h2>
                            <div className="CourseFeatures_container">
                                <div className="CourseFeatures_bg-img-container">
                                    <picture><img src={MCPFeatures} alt="features bg" /></picture>
                                </div>
                                <ul>
                                    <MCPFeatureCard count={0} title='Personalised Program' desc="Master your skills from where you are, with India's only personalised program " icon={f1} />
                                    <MCPFeatureCard count={1} title='Expert Mentors' desc="Get career guidance, mentorship, time management strategies from industry experts" icon={f2} />
                                    <MCPFeatureCard count={0} title='Quick Doubt Support' desc="Get your doubts cleared by coding experts and have a smooth learning" icon={f3} />
                                    <MCPFeatureCard count={1} title='Get Certified' desc="Get recognized on course completion with highly reputed PrepBytes certificates" icon={f4} />
                                    <MCPFeatureCard count={0} title='250+ Coding Questions' desc="Best way to master a language is by coding in the language" icon={f5} />
                                    <MCPFeatureCard count={1} title='20+ Live Coding Sessions ' desc="Code live and get mentorship with the top-rated coders of the country." icon={f6} />
                                    <MCPFeatureCard count={0} title='50+ Hours of Videos' desc="Recorded video lectures by experts to help you understand the concepts easily" icon={f7} />
                                    <MCPFeatureCard count={1} title='40+ Coding quizes' desc="Small quizzes after every topic to give you a quick check on your understandings" icon={f8} />
                                </ul>
                            </div>
                        </div>

                        <div className="course-page-stats">
                            <Stats h="10K+" p="Students Enrolled" />
                            <Stats h="1000K+" p="Doubts Solved" />
                            <Stats h="2K+ hrs" p="Mentor Interaction" />
                        </div>

                        <div className="companies-network-main">
                            <h2>
                                <span>Crack Reputed Coding Contests</span>
                            </h2>
                            <img src={MCPnetwork} alt="network" />
                        </div>

                        <MCPSyllabus />

                        <div className="CoursesPage__container-batchDetails" id='CoursePageBatchDetails__section_main_container_id'>
                            <div className="CoursePageBatchDetails__section_main_container">
                                <div className="CoursePageBatchDetails__section_container">
                                    <h4 className="CoursePageBatchDetails__heading">
                                        SELECT BATCH
                                    </h4>
                                    <div className="CoursePageBatchDetails__section">
                                        <div className="CoursePageBatchDetails__batch_text_section">
                                            <div className="CoursePageBatchComponent__date_container">
                                                <div className={`CoursePageBatchComponent_radio_buttons ${batch === 1 ? "CoursePageBatchComponent_radio_buttons_selected" : "CoursePageBatchComponent_radio_buttons_not-selected"}`} onClick={() => setBatch(1)}>
                                                    <label className="CoursePageBatchComponent_radio_label CoursePageBatchComponent_radio_label_top_no">
                                                        <input type="radio" className="CoursePageBatchComponent__radio_input" />
                                                        <span className="CoursePageBatchComponent__radio_text_container">
                                                            <h5 className="CoursePageBatchComponent__radio_batch_start_date">
                                                                1st May
                                                            </h5>
                                                            <p className={batch === 1 ? "CoursePageBatchComponent__reg_end_date_selected" : "CoursePageBatchComponent__reg_end_date_not-selected"}>
                                                                Enrollment Started
                                                            </p>
                                                        </span>
                                                    </label>
                                                </div>

                                                <div className={`CoursePageBatchComponent_radio_buttons ${batch === 0 ? "CoursePageBatchComponent_radio_buttons_selected" : "CoursePageBatchComponent_radio_buttons_not-selected"}`} onClick={() => setBatch(0)}>
                                                    <label className="CoursePageBatchComponent_radio_label CoursePageBatchComponent_radio_label_top_no">
                                                        <input type="radio" className="CoursePageBatchComponent__radio_input" />
                                                        <span className="CoursePageBatchComponent__radio_text_container">
                                                            <h5 className="CoursePageBatchComponent__radio_batch_start_date">
                                                                15th May
                                                            </h5>
                                                            <p className={batch === 0 ? "CoursePageBatchComponent__reg_end_date_selected" : "CoursePageBatchComponent__reg_end_date_not-selected"}>
                                                                Enrollment Started
                                                            </p>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="CoursePageBatchDetails__enrollNow_container">
                                            <div className="CoursePageBatchDetails__actual_priceamount_no_discount">
                                                ₹{course?.price}
                                            </div>
                                            <div className="CoursePageBatchDetails__cta_container">
                                                <div className="CoursePageBatchDetails__enroll_now_button_box">
                                                    <button className="CoursePageBatchDetails__enroll_now_button" onClick={handleEnroll}>
                                                        Enroll Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MCPTestimonial />

                        <div className="CoursePageLearnings__main">
                            <h5>By The End Of This Course, You Will Be Able To</h5>
                            <div className="CoursePageLearnings__content-container">
                                <img src={Vecto2} alt="end logo" />
                                <div className="CoursePageLearnings__details-container">
                                    <h5>By The End Of This Course, You Will Be Able To</h5>

                                    <CourseHighlightCardEnd icon={One} text='4 star and above in CodeChef' color="#df3897" />
                                    <CourseHighlightCardEnd icon={Two} text='Crack contests like Facebook Hacker Cup, Google Kickstart, ACM ICPC' color="#0398d3" />
                                    <CourseHighlightCardEnd icon={Three} text='Candidate master and above in CodeForces' color="#7914a3" />
                                    <CourseHighlightCardEnd icon={Four} text='Specialist and above in SPOJ.com' color="#eb9a00" />
                                </div>
                            </div>
                        </div>
                    </div>
            }        </>
    )
}

export default CompetitiveCourse
