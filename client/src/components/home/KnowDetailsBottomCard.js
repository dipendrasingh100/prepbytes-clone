import React from 'react'

const KnowDetailsBottomCard = ({ image, heading, subheading }) => {
    return (
        <div className='KnowDetails__main-bottom-container-card'>
            <div className="KnowDetails__main-bottom-container-card-image">
                <img src={image} alt="logo" className='KnowDetails__main-bottom-container-card-image--img' />

                <p className="KnowDetails__main-bottom-container-card--heading">
                    {heading}
                </p>

                <p className="KnowDetails__main-bottom-container-card--subheading">
                    {subheading}
                </p>
            </div>
        </div>
    )
}

export default KnowDetailsBottomCard
