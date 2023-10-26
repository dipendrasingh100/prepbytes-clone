import React from 'react'
import "../css/home.css"
import MetaData from '../components/MetaData'
import mainPoster from "../assets/images/main-poster.svg"
import Launchpad from "../assets/images/Google-launchpad.webp"
import FutureSkills from "../assets/images/future-skills-homepage.webp"
import SheLeads from "../assets/images/she-leads.webp"
import AwsEd from "../assets/images/aws-ed-start.webp"
import CodingJourney from '../components/CodingJourney'
import CourseTypes from '../components/CourseTypes'
import HomeJourney from '../components/HomeJourney'
import GetCallback from '../components/GetCallback'

const Home = () => {
  return (
    <>
      <MetaData title='Master in Competitive Coding | Crack Coding Interviews | PrepBytes' />
      <div className='home-container'>
        <section className="home-top-main">
          <div className="home-top-left">
            <h1 className='home-top-left--heading'>Start your journey of success</h1>
            <h1 className='home-top-left--subheading'>Personalised Coding Programs to make coding easier for you</h1>
            <h1 className='home-top-left--last'>Want to know how PrepBytes can help you?</h1>
            <div className="home-top-left-button">
              <button >Know More</button>
            </div>
          </div>
          <div className="home-top-right">
            <img src={mainPoster} alt="main poster" />
          </div>
        </section>

        <div className="home-achievement">
          <div className="achievement-container">
            <img src={Launchpad} alt="google launchpad" />
            <img src={FutureSkills} alt="future skills" />
            <img src={SheLeads} alt="she leads" />
            <img src={AwsEd} alt="aws ed start" />
          </div>
        </div>

        <CodingJourney />
        <CourseTypes />
        <HomeJourney />

        <GetCallback />
      </div>
    </>
  )
}

export default Home
