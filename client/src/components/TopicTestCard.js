import React from 'react'
import "../css/topic-test.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/cartSlice'

const TopicTestCard = ({ id, title, thumb }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addToCart({ id, title, image: thumb, price: 50, description: "", type: "test" }))
        localStorage.setItem("from", "/mock-tests")
        navigate(`/checkout/${title}`)
    }
    return (
        <div className='topic-mock-test-card'>
            <div className="topic-mock-test-card-image">
                <img src={thumb} alt={title} />
            </div>

            <p className="topic-mock-test-card--heading">
                {title}
            </p>

            <div className="topic-mock-test-card--bottom">
                <button  onClick={handleClick}>Pay & Register</button>
            </div>
        </div>
    )
}

export default TopicTestCard
