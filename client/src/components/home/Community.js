import React from 'react'
import "../../css/home/community.css"
import CommunityCard from './CommunityCard'

const Community = () => {
    return (
        <section className="Community">
            <div className="Community__main">
                <p className="Community__main--heading">
                    PrepBytes for <span>Mentors & Colleges</span>
                </p>

                <p className="Community__main--subheading">
                    Join PrepBytes in the journey to reach more colleges and mentor more students
                </p>

                <div className="Community__main-container">
                    <CommunityCard
                        thumb="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/be_a_part_of_mentors.png"
                        heading="Be a part of growing Mentor Community of PrepBytes"
                        subheading="We look forward to industry experts who have a passion for teaching, mentoring & making students future-ready" />

                    <CommunityCard
                        thumb="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/futuristic_algo.png"
                        heading="Futuristic ALGO-driven Personalised learning module for your college"
                        subheading="Every Student is different, hence their Learning should also be. Get in touch with to understand how PrepBytes can help students in your college" />
                </div>
            </div>
        </section>
    )
}

export default Community
