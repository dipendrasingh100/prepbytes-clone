import React, { useEffect } from 'react'
import "../css/dashboard.css"
import { GiGraduateCap } from 'react-icons/gi'
import EnrolledCourseCard from '../components/EnrolledCourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { getMyCourses } from '../app/userSlice'

const Dashboard = ({ navClose, setNavClose }) => {
  const { user } = useSelector(state => state.user)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMyCourses())
  }, [dispatch])
  return (
    <div className='dashboard-section-container'>
      <div className="dashboard-side-nav">
        <div className={`profile_nav ${navClose ? "profile_nav_close" : ""}`}>
          <div className={`profile_container `}>
            <div className="profile-mycourses">
              <div className={`profile_nav_selected ${navClose ? "profile_nav_close" : ""}`}>
                <span className={`profile_nav-list-icon ${navClose ? "n-mob" : ""}`}>
                  <GiGraduateCap />
                </span>
                <div className={`${navClose ? "profile_nav-list-detail-close" : "profile_nav-list-detail"}`}>
                  My Courses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-ipad-mob"></div>
        <div className="mycourses-section">
          <div className="mycourses-section-top">
            <div className="mycourses-section-top-view">
              <div className="mycourses-section-tav-active">
                Courses/Tests({user?.courses.length + user?.tests.length})
              </div>
            </div>
          </div>
          <div className="mycourses-section_courses-container">
            {user && user?.courses.map((item, index) => (
              < EnrolledCourseCard key={index} title={item?.title} thumb={item?.thumb} description={item?.description} />
            ))}
            {user && user?.tests.map((item, index) => (
              < EnrolledCourseCard key={index} title={item?.title} thumb={item?.thumbnail} description={item?.description} />
            ))}
          </div>
        </div>
        <div className="dashboard-section-right">

        </div>
      </div>
    </div>
  )
}

export default Dashboard
