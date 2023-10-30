import React, { useEffect } from 'react'
import "../css/mock.css"
import TestCard from '../components/TestCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTests } from '../app/mockSlice'
import TopicTestCard from '../components/TopicTestCard'
import { handleLink } from '../utils/helperFuction'
import Loader from "../components/Loader"

const Mock = () => {
    const dispatch = useDispatch()
    const { tests, isLoading } = useSelector(state => state.mock)
    useEffect(() => {
        handleLink()
        dispatch(getTests())
    }, [dispatch])

    return (
        <div className='mock-main'>
            {isLoading ? <Loader />
                : <>
                    <div className="mock-header">
                        <div className="mock-header-container">
                            <h2 className="mock-header-top">
                                Mock Tests
                            </h2>
                            <p className="mock-header-bottom">
                                Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.
                            </p>
                        </div>
                    </div>

                    <div className="mock-featured-list">
                        <div className="mock-featured-main">
                            <p>Featured Mock Tests</p>
                            <div className="mock-featured-main-container">
                                <p className="mock-featured-main-container--heading">
                                    Past Mock Tests
                                </p>
                                <div className="mock-featured-main-container-tests">
                                    {
                                        tests && tests.map(test => {
                                            if (test?.category !== "topic") {
                                                return <TestCard key={test._id} id={test._id} title={test.title} thumb={test.thumbnail} date={test.date} participants={test.participants} duration={test.duration} />
                                            }
                                            return null;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mock-practice-list">
                        <div className="mock-practice-main">
                            <p>Practice Tests</p>
                            <div className="mock-practice-main-container">
                                <p className="mock-practice-main-container--heading">
                                    Topic Wise
                                </p>
                                <div className="mock-practice-main-container-tests">
                                    {tests && tests.map(test => {
                                        if (test?.category === "topic") {
                                            return <TopicTestCard key={test._id} title={test.title} thumb={test.thumbnail} />
                                        }
                                        return null;
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Mock
