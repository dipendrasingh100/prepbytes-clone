import React from 'react'
import Info from "../assets/icons/info.svg"
import Share from "../assets/icons/share.svg"
import "../css/test-card.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/cartSlice'
import { useNavigate } from 'react-router-dom'

const TestCard = ({ id, title, thumb, date, participants, duration }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addToCart({ id, title, image: thumb, price: 50, description: "", type: "test" }))
        localStorage.setItem("from", "/mock-tests")
        navigate(`/checkout/${title}`)
    }
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
                <button onClick={handleClick}>Pay & Register</button>
            </div>
        </div>
    )
}

export default TestCard
