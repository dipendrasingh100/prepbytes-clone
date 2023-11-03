import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const TopicCardProject = ({ projects }) => {
    const [isClicked, setIsClicked] = useState(true)

    return (
        <div className='StackSyllabus'>
            <div className="StackSyllabus__course">
                <div className="StackSyllabusContent__course-section">
                    <div className="StackSyllabus__course-top">
                        <div className="StackSyllabus__course-top-main">
                            <p className="StackSyllabus__course-top-main--text">
                                Projects
                            </p>

                            <p className="StackSyllabus__course-top-main--done">
                                week 3-16
                            </p>
                        </div>

                        <p className="StackSyllabus__course-top--text">
                            You will build 6+ projects during the whole program. Starting from building basic apps to bring your learning to the application, to building a real-world website that you can add in your resume or start your own business, you will do it all. The projects are carefully chosen by software developers for you.
                        </p>
                    </div>

                    <div className={`StackSyllabus__course-bottom ${isClicked ? "StackSyllabus__course-bottom-active" : ""}`}>
                        <p className="StackSyllabus__course-bottom--chapter">
                            <span>Course Content</span>
                        </p>
                        <button className="StackSyllabus__course-bottom--button" onClick={() => setIsClicked(!isClicked)}>
                            {isClicked ? "Hide" : "View Details"}
                        </button>
                    </div>

                    <div className="StackSyllabusContent__course-content" style={{ height: `${isClicked ? "" : "0px"}` }}>
                        <div className="StackSyllabus__course-content">
                            <div className="StackSyllabus__main--container">
                                {
                                    projects.map((item, index) => (
                                        <ProjectCard key={index} img={item.image} title={item.name} desc={item.description} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicCardProject
