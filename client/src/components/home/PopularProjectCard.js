import React from 'react'
import "../../css/home/popularprojects.css"

const PopularProjectCard = ({ image, title, link }) => {
    return (
        <div className='popularProjects__main-container-card'>
            <div className="popularProjects__main-container-card-image">
                <img src={image} alt="main" className="popularProjects__main-container-card-image--img" />
            </div>

            <p className="popularProjects__main-container-card--heading">
                {title}
            </p>

            <div className="popularProjects__main-container-card-button">
                <a href={link} className="popularProjects__main-container-card-button--btn">
                    Read Now
                </a>
            </div>
        </div>
    )
}

export default PopularProjectCard
