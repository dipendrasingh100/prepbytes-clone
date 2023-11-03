import React from 'react'
import "../../css/fs/certification.css"

const Certification = () => {
    return (
        <div className='Certification__main'>
            <div className="Certification__main__left">
                <p className="Certification__main__left--heading">
                    Get a real time project
                </p>
                <div className="Certification__main__left--box">
                    <div className="Certification__main__left--box-two">
                        <div className="Certification__main__left--box-two--icon-container">
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/real.svg" alt="project" className="Certification__main__left--box-two--icon-container--icon" />
                        </div>
                        <div className="Certification__main__left--box-two--text-container">
                            <p className="Certification__main__left--box-two--text-container--text">
                                Get a real time project
                            </p>
                        </div>
                    </div>
                    <div className="Certification__main__left--box-two">
                        <div className="Certification__main__left--box-two--icon-container">
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/experience.svg" alt="project" className="Certification__main__left--box-two--icon-container--icon" />
                        </div>
                        <div className="Certification__main__left--box-two--text-container">
                            <p className="Certification__main__left--box-two--text-container--text">
                                Experience agile methodology & Work with industry experts
                            </p>
                        </div>
                    </div>
                    <div className="Certification__main__left--box-two">
                        <div className="Certification__main__left--box-two--icon-container">
                            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/deploy.svg" alt="project" className="Certification__main__left--box-two--icon-container--icon" />
                        </div>
                        <div className="Certification__main__left--box-two--text-container">
                            <p className="Certification__main__left--box-two--text-container--text">
                                Deploy your project to Production
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Certification__main__right">
                <p className="Certification__main__right--heading">
                    Certification
                </p>
                <p className="Certification__main__right--text">
                    Joint Co-Branded Participation Certificate & Partner Completion Certificate
                </p>

                <div className="Certification__main__right--image">
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/nasscom-certificate-full-satck-mern.png" alt="certificate" className="Certification__main__right--image-img" />
                </div>
            </div>
        </div>
    )
}

export default Certification
