import React from 'react'
import "../css/footer.css"
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-flex">
                <div className="left">
                    <div className="footer-title">
                        FOLLOW US
                    </div>
                    <div className="footer-social-icons">
                        <a href="" target='_blank'>
                            <AiFillFacebook color='#000' />
                        </a>
                        <a href="" target='_blank'>
                            <AiFillInstagram color='#000' />
                        </a>
                        <a href="" target='_blank'>
                            <AiFillLinkedin color='#000' />
                        </a>
                        <a href="" target='_blank'>
                            <AiFillYoutube color='#000' />
                        </a>
                    </div>
                    <div className="footer-contact">
                        <div className="footer-title">
                            CONTACT US
                        </div>
                        <div>
                            <div className='footer-mobile'>
                                <span></span>
                                <span className='contact-style'>
                                    <a href="tel:+91-7969002111">+91-7969002111</a>
                                </span>
                            </div>
                            <div className='footer-email'>
                                <span></span>
                                <span className='contact-style'>
                                    <a href="mailto:support@prepbytes.com">support@prepbytes.com</a>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="middle">
                    <div className="footer-title">
                        LATEST ARTICLES
                        <ul type='none' className='article-items'>
                            <a href="">
                                <li>CPP Interview Questions</li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-title">
                        POPULAR ARTICLES
                        <ul type='none' className='article-items'>
                            <a href="">
                                <li>GIT Interview Questions and Answers</li>
                            </a>
                        </ul>

                    </div>
                </div>
                <div className="right">
                    <div className="footer-title">
                        QUICK LINKS
                    </div>
                    <Link to='/' className='footer-links'>Mock Tests</Link>
                    <Link to='/' className='footer-links'>Placement Programs</Link>
                    <Link to='/' className='footer-links'>Coding Courses</Link>
                    <Link to='/' className='footer-links'>About us</Link>
                    <Link to='/' className='footer-links'>Project</Link>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div>Copyright©2023</div>
                <div className='policy-cont'>
                    <a href="">Privacy Policy</a>
                    <a href="">Refund Policy</a>
                    <a href="">Terms of Use</a>
                </div>
            </div>
        </footer >
    )
}

export default Footer
