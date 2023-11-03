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
import KnowDetails from '../components/home/KnowDetails'
import Community from '../components/home/Community'
import Mentors from '../components/home/Mentors'
import Testimonial from '../components/home/Testimonial'
import PopularProjectCard from '../components/home/PopularProjectCard'

const Home = () => {

  const handleClick = () => {
    const element = document.getElementById('courses');
    element.scrollIntoView({ behavior: 'smooth' });
  };
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
              <button onClick={handleClick}>Know More</button>
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
        <div>
          <KnowDetails />
          <div>
            <div className="Home__poolexperts">
              <div className="Home__poolexperts--img-lazyload">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Bespoke+Mentors.webp" alt="team" className="Home__poolexperts--img" />
              </div>
              <div>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Selected_pool_of(mobile)+(1).webp" alt="team" className="Home__poolexperts--img-mob" />
              </div>
            </div>
          </div>
        </div>

        <Testimonial />

        <section className="PrepBytesPlacedStudents">
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/you_could_be_the(web_1366).png" alt="placed students" className="PrepBytesPlacedStudents-img" />
        </section>

        <Mentors />
        <div>
          <section className="CBMBanner">
            <div className="CBMBanner_main">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-WEB.webp" alt="banner" className="CBMBanner_bg-img" />
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-Homepage-mobile.webp" alt="banner" className="CBMBanner_bg-img-mob" />

              <div className="CBMBanner_info-cont">
                <h3 className="CBMBanner_info-title">
                  Want to represent your college?
                </h3>

                <div className="CBMBanner_info-text">
                  <span>
                    <p>
                      Join <strong style={{ color: '#00afec', fontWeight: "500" }}>PrepBytes Campus Business Manager Internship program.</strong>
                    </p>
                  </span>
                </div>

                <a href="https://www.prepbytes.com/campus-business-manager" className="MuiButtonBase-root MuiButton-root MuiButton-text CBMBanner_cta">Join Now</a>
              </div>
            </div>
          </section>
        </div>

        <Community />

        <section className="popularProjects">
          <div className="popularProjects__main">
            <p className="popularProjects__main--heading">
              Most Popular Blogs
            </p>

            <div className="popularProjects__main-container">
              <PopularProjectCard image="https://res.cloudinary.com/dfbp64xxb/image/upload/v1698486916/prepbytes%20clone/gpwxbkhwqrwctwc2vwpv.png" title="Todo App" link="https://dipsingh100.github.io/ToDo-Web-app/" />
              <PopularProjectCard image="https://res.cloudinary.com/dfbp64xxb/image/upload/v1698491454/prepbytes%20clone/rhdrychoiwypzoyxyixt.png" title="React Blog Web App" link="https://dipendra-blog-app.netlify.app/" />
              <PopularProjectCard image="https://res.cloudinary.com/dfbp64xxb/image/upload/v1698492786/prepbytes%20clone/yoxkwgq8z5akduquv30n.png" title="Ecommerce Web App" link="https://cartforus.netlify.app/" />
            </div>
          </div>
        </section>

        <GetCallback />

      </div>
    </>
  )
}

export default Home
