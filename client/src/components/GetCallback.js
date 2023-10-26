import React from 'react'
import Callback from "../assets/images/call_back.svg"
import "../css/getcallback.css"

const GetCallback = () => {
    return (
        <div>
            <section className="get-callback">
                <div className="callback-main">
                    <div className="callback-main-container">
                        <div className="left">
                            <p className="left--heading">Talk to our experts</p>
                            <p className="left--subheading">
                                Still Confused how PrepBytes can help you achieve your dream? Talk to our experts
                            </p>
                            <div className="left--image">
                                <img src={Callback} alt="get call back img" />
                            </div>
                        </div>
                        <div className="right">
                            <form >
                                <input type="text" name="name" placeholder='Name' required/>
                                <input type="email" name="email" placeholder='Email' required/>
                                <input type="tel" name="phone" placeholder='Phone' required/>
                                <textarea name="query" cols="40" rows="20" autoComplete='off' placeholder="Query" required></textarea>
                                <button type='Submit'>Request a call back</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GetCallback
