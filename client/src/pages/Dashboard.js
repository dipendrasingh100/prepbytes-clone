import React from 'react'
import "../css/dashboard.css"
import { GiGraduateCap } from 'react-icons/gi'
import EnrolledCourseCard from '../components/EnrolledCourseCard'

const Dashboard = ({ navClose, setNavClose }) => {
  return (
    <div className='dashboard-section-container'>
      <div className="dashboard-side-nav">
        <div className={`profile_nav ${navClose ? "profile_nav_close" : ""}`}>
          <div className="profile_container">
            <div className="profile-mycourses">
              <div className={`profile_nav_selected ${navClose ? "profile_nav_close" : ""}`}>
                <span className="profile_nav-list-icon">
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
                Courses
              </div>
            </div>
          </div>
          <div className="mycourses-section_courses-container">
            <EnrolledCourseCard />
          </div>
        </div>
        <div className="dashboard-section-right">

        </div>
      </div>
    </div>
  )
}

export default Dashboard
