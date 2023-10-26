import React from 'react'
import CourseTypesCard from './CourseTypesCard'
import BgCampus from "../assets/images/bg_prepare_for_campus.webp"
import BgCompetetive from "../assets/images/bg_master_competetive.webp"
import BgMern from "../assets/images/bg_learn_full_mern.webp"
import Campus from "../assets/images/prepare_for_campus.webp"
import Mern from "../assets/images/learn_full_stack.webp"
import Competetive from "../assets/images/master_competetive_pgm.webp"
import "../css/course_types.css"

const CourseTypes = () => {
    return (
        <div>
            <section className="course-types">
                <div className="course-types-container">
                    <p className="course-types--heading">
                        I want to
                    </p>
                    <div className="course-types-card-container">
                        <CourseTypesCard back={BgCampus} innerImg={Campus} heading="Prepare for Campus Placements" text="rgb(0, 165, 236)" />
                        <CourseTypesCard back={BgCompetetive} innerImg={Competetive} heading="Master Competitive Programming" />
                        <CourseTypesCard back={BgMern} innerImg={Mern} heading="Build Development Projects" text="rgb(15, 181, 130)" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CourseTypes
