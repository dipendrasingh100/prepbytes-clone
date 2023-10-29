import React from 'react'
import NewJobs from "../../assets/images/fs/newJobs.svg"
import Growth from "../../assets/images/fs/growth.svg"
import Graph from "../../assets/images/fs/graph.svg"
import "../../css/fs/stats.css"
const Statistics = () => {
    return (
        <div className="Statistics">
            <div className="Statistics__main">
                <div className="Statistics__main-left">
                    <div className="Statistics__main-left-container">
                        <div className="Statistics__main-left-container--heading">
                            Industry Growth
                        </div>
                        <div className="Statistics__main-left-container--block-container">
                            <div className="Statistics__main-left-container--block-container-block">
                                <img src={Growth} alt="growth" />
                                <div className="Statistics__main-left-container--block-container-block-box">
                                    <p className="Statistics__main-left-container--block-container-block-box-heading">
                                        30% Annual Growth
                                    </p>
                                    <p className="Statistics__main-left-container--block-container-block-box-text">
                                        for Full-Stack Developer jobs by 2020.
                                    </p>
                                </div>
                            </div>
                            <div className="Statistics__main-left-container--block-container-block">
                                <img src={NewJobs} alt="new jobs" />
                                <div className="Statistics__main-left-container--block-container-block-box">
                                    <p className="Statistics__main-left-container--block-container-block-box-heading">
                                        Over 1 million new jobs
                                    </p>
                                    <p className="Statistics__main-left-container--block-container-block-box-text">
                                        Full-Stack Developer profile will be created by 2020 (Source: NASSCOM)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="Statistics__main-right">
                    <div className="Statistics__main-right-container">
                        <p className="Statistics__main-right-container--heading">
                            Annual Salary
                        </p>
                        <div className="Statistics__main-right-container--image">
                            <img src={Graph} alt="graph" />
                        </div>
                        <div className="Statistics__main-right-container--source">
                            Source:
                            <span>Glassdoor</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics
