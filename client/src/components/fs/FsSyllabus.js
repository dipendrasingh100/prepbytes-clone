import React from 'react'
import "../../css/fs/syllabus.css"
import TopicCard from './TopicCard'
import { useSelector } from 'react-redux'
import TopicCardProject from './TopicCard_Project'

const FsSyllabus = () => {

    const { course } = useSelector(state => state.course)
    return (
        <div className='StackSyllabus__main'>
            <div className="StackSyllabus__main-top">
                <div className="StackSyllabus__main-top-container">
                    <p className="StackSyllabus__main-top-container--heading">
                        Program Syllabus & Projects
                    </p>

                    <div className="StackSyllabus__main-top-container--right">
                        <a href="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf" >
                            <button className='StackSyllabus__main-top-container--right-button'>Download Syllabus</button>
                        </a>
                    </div>
                </div>
                <p className="StackSyllabus__main-top--text">
                    We have reverse engineered our syllabus by talking to the best companies and understanding what skills the industry needs the most right now.
                </p>
            </div>
            {course && course?.syllabus.map((item, index) => (
                <TopicCard key={index} topic={item.topic} description={item.description} duration={item.duration} content={item.content} />
            ))
            }

            <TopicCardProject projects={course?.projects} />
        </div>
    )
}

export default FsSyllabus
