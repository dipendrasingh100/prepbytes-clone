import React from 'react'
import "../css/topic-test.css"

const TopicTestCard = ({ title, thumb }) => {
    return (
        <div className='topic-mock-test-card'>
            <div className="topic-mock-test-card-image">
                <img src={thumb} alt={title} />
            </div>

            <p className="topic-mock-test-card--heading">
                {title}
            </p>

            <div className="topic-mock-test-card--bottom">
                <button>Pay & Register</button>
            </div>
        </div>
    )
}

export default TopicTestCard
