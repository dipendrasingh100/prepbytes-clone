import React from 'react'
import "../../css/home/knowdetails.css"
import KnowDetailsBottomCard from './KnowDetailsBottomCard'

const KnowDetails = () => {
    return (
        <div className='KnowDetails'>
            <div className="KnowDetails__main">
                <div className="KnowDetails__main-top">
                    <div className="KnowDetails__main-top-left">
                        <div className="KnowDetails__main-top-left-back">
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/know_details_back.svg" alt="bg icon" className="KnowDetails__main-top-left-back--img" />
                        </div>
                        <div className="KnowDetails__main-top-left-box">
                            <div className="KnowDetails__main-top-left-box-top">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png" alt="co founder" className="KnowDetails__main-top-left-box-top--img" />

                            </div>
                            <p className="KnowDetails__main-top-left-box--text">
                                Mamta Kumari
                            </p>
                            <p className="KnowDetails__main-top-left-box--subtext">
                                Co-Founder PrepBytes
                            </p>

                            <div className="KnowDetails__main-top-left-box-company">
                                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png" alt="" className="KnowDetails__main-top-left-box-company--img" />
                            </div>
                        </div>
                    </div>
                    <div className="KnowDetails__main-top-right">
                        <p className="KnowDetails__main-top-right--heading">
                            Attend Free sessions with industry experts and get valuable guidance
                        </p>

                        <div className="KnowDetails__main-top-right-container">
                            <div className="KnowDetails__main-top-right-container-box">
                                <p className="KnowDetails__main-top-right-container-box--text">
                                    How to master competitive coding?
                                </p>

                                <a href="https://webinar.prepbytes.com/how-to-master-competitive-programming" className="KnowDetails__main-top-right-container-box--btn">
                                    Know More
                                </a>
                            </div>
                            <div className="KnowDetails__main-top-right-container-box">
                                <p className="KnowDetails__main-top-right-container-box--text">
                                    How to crack coding interviews?
                                </p>

                                <a href="https://webinar.prepbytes.com/how-to-master-competitive-programming" className="KnowDetails__main-top-right-container-box--btn">
                                    Know More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="KnowDetails__main-bottom">
                    <div className="KnowDetails__main-bottom-container">
                        <KnowDetailsBottomCard image="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg" heading="100K+" subheading="Coding Community"/>
                        <KnowDetailsBottomCard image="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/1000%2B_hours_pf.svg" heading="1000+" subheading="Hours of Live session"/>
                        <KnowDetailsBottomCard image="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/10000_hours_learning.svg" heading="10000+" subheading="Hours of learning"/>
                        <KnowDetailsBottomCard image="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/doubts_solved.svg" heading="700K+" subheading="Doubts Solved"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowDetails
