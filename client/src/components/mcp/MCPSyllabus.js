import React, { useState } from 'react'
import "../../css/mcp-syllabus.css"
import { useSelector } from 'react-redux'
import CurriculumImg from "../../assets/images/mcp/Curriculum-Image.webp"

const MCPSyllabus = () => {
    const { course } = useSelector(state => state.course)
    const [subject, setSubject] = useState(0)

    return (
        <div className='courseSyllabus-main'>
            <h5 className="CourseSyllabus__main-heading">
                <span>Curriculum</span>
            </h5>
            <div className="CourseSyllabus__syllabus-container">
                <div className="CourseSyllabus__syllabus-subjects-container">
                    {
                        course && course?.syllabus.map((item, index) => (
                            <div key={index} className={subject === index ? "CourseSyllabus__syllabus-subject-selected" : "CourseSyllabus__syllabus-subject-not-selected"} onClick={() => setSubject(index)}>
                                <img src={item.image} alt="subject logo" className='subject-logo'/>
                                <div className="CourseSyllabus__syllabus-subjects-text">
                                    {item.topic}
                                </div>
                            </div>
                        ))
                    }
                    <img src={CurriculumImg} alt="CurriculumImg" className="CourseSyllabus__syllabus-img" />
                </div>

                <div className="CourseSyllabus__syllabus-container-category-container CourseSyllabus__syllabus-container-category-container-web">
                    <ul className="CoursePage-scrollbar CourseSyllabus__category-list" style={{ height: "402px" }}>
                        {course && course?.syllabus[subject].content.map((item, index) => (
                            <li className={course?.syllabus[subject].content.length - 1 === index ? "last-subtopic" : "subtopic-list-item"} key={index}>
                                {item}
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MCPSyllabus
