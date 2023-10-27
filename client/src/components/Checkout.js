import React, { useEffect, useState } from 'react'
import "../css/checkout.css"
import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill } from "react-icons/bs"
import { AiFillCheckCircle } from "react-icons/ai"
import CheckoutItemCard from './CheckoutItemCard'
import PaypalCheckoutButton from './PaypalCheckoutButton'
import { useSelector } from 'react-redux'
import { handleLink } from '../utils/helperFuction'

const Checkout = () => {
    const [success, setSuccess] = useState(false)
    const { cartItem } = useSelector(state => state.cart)
    useEffect(()=>{
        handleLink()
    },[])

    return (
        <div className='checkout-main-container'>
            <div className="checkout-header">
                <div className="checkout-multiStep-box">
                    <span className="checkout-box-container">
                        <span>
                            <BsFill1CircleFill />
                        </span>
                        <span>
                            My Cart
                        </span>
                    </span>
                </div>
                <div className="checkout-multiStep-box">
                    <div className="checkout-horizontal">
                        <span></span>
                    </div>
                    <span className="checkout-box-container">
                        <span>
                            <BsFill2CircleFill />
                        </span>
                        <span>
                            Checkout
                        </span>
                    </span>
                </div>
                <div className="checkout-multiStep-box">
                    <div className="checkout-horizontal">
                        <span></span>
                    </div>
                    <span className="checkout-box-container">
                        <span>
                            <BsFill3CircleFill />
                        </span>
                        <span>
                            Status
                        </span>
                    </span>
                </div>
            </div>

            <div className="Checkout_cart-price-container">
                <div className="left">
                    <div className="checkout-card-main">
                        <p>My Cart</p>
                        <hr />
                        <CheckoutItemCard image={cartItem?.image} title={cartItem?.title} price={cartItem?.price} description={cartItem?.description} />
                    </div>
                </div>
                <div className="right">
                    <div className="priceDetail-container">
                        <p>Price Details</p>
                        <hr />
                        <div className="subtotal-container">
                            <div className="left">
                                <p>Sub Total:</p>
                            </div>
                            <div className="right">
                                <p>Rs. {cartItem?.price}</p>
                            </div>
                        </div>
                        <p>Apply Coupon</p>
                        <hr />
                        <div className="total-container">
                            <div className="left">
                                <p>Total Amount:</p>
                            </div>
                            <div className="right">
                                <p>Rs. {cartItem?.price}</p>
                            </div>
                        </div>
                        {success ? <button>Purchased</button> : <>
                            <button>Make Payment</button>
                            <PaypalCheckoutButton setSuccess={setSuccess} />
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
