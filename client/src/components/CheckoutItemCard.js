import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutItemCard = ({ image, price, title, description }) => {
    return (
        <div>
            <div className="cardItem">
                <img src={image} alt="thumb" />
                <div className="card-course-description">
                    <h6>Rs. {price}</h6>
                    <Link to='/master-competitive-programming'>
                        {title}
                    </Link>
                    <p>{description}</p>
                    <hr />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CheckoutItemCard
