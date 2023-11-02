import React from 'react'

const CommunityCard = ({ thumb, heading, subheading }) => {
    return (
        <div className="Community__main-container-card">
            <div className="Community__main-container-card-image">
                <img src={thumb} alt="thumb" className="Community__main-container-card-image--img" />
            </div>

            <p className="Community__main-container-card--heading">
                {heading}
            </p>

            <p className="Community__main-container-card--subheading">
                {subheading}
            </p>

            <div className="Community__main-container-card-button">
                <a href="https://docs.google.com/forms/d/1lbjX6WZtWTwPorzrwlrFu3EwY3X4w3QWQH_Fhd_eafw/viewform?ts=602f5280" className="Community__main-container-card-button--btn">Know More</a>
            </div>
        </div>
    )
}

export default CommunityCard
