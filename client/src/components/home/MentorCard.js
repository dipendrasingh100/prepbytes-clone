import React from 'react'

const MentorCard = ({ bg, profile, name, description, subtitle, companies }) => {
    return (
        <div className='PrepMentors__main--container-card'>
            <div className="PrepMentors__main--container-card-image">
                <img src={bg} alt="bg" className="PrepMentors__main--container-card-image-background--img" />
                <img src={profile} alt="profile" className="PrepMentors__main--container-card-image--img" />
            </div>
            <div className="PrepMentors__main--container-card-text">
                <p className="PrepMentors__main--container-card-text--name">
                    {name}
                </p>
                <p className="PrepMentors__main--container-card-text--designation">
                    {subtitle}
                </p>
            </div>
            <div className="PrepMentors__main--container-card-info">
                <p className="PrepMentors__main--container-card-info--text">
                    {description}
                </p>
            </div>

            <div className="PrepMentors__main--container-card-company">
                {companies.map((item, index) => (
                    <img src={item} alt="company" className="PrepMentors__main--container-card-company--img" key={index} />
                ))}
            </div>
        </div>
    )
}

export default MentorCard
