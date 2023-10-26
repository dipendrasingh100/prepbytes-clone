import React from 'react'
import Info from "../assets/icons/info.svg"
import Share from "../assets/icons/share.svg"
import "../css/test-card.css"

const TestCard = ({ title, thumb, date, participants, duration }) => {
    return (
        <div className='mock-test-card'>
            <div className="mock-test-card-top">
                <img src={Info} alt="info" />
                <div className="top-bar">
                    <div className="share-button">
                        <img src={Share} alt="share" />
                    </div>
                </div>
            </div>
            <div className="mock-test-card-image">
                <img src={thumb} alt={title} />
            </div>

            <p className="mock-test-card--heading">
                {title}
            </p>

            <div className="mock-test-card--middle">
                <div className="middle-left">
                    <p>{date}</p>
                    <p>Date</p>
                </div>
                <div className="middle-middle">
                    <p>{participants}</p>
                    <p>Participants</p>
                </div>
                <div className="middle-right">
                    <p>{duration} min</p>
                    <p>Duration</p>
                </div>
            </div>

            <div className="mock-test-card--bottom">
                <button>Pay & Register</button>
            </div>
        </div>
    )
}

export default TestCard
