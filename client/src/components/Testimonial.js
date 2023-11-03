import React from 'react'
import Carousel from 'react-multi-carousel';
import "../css/testimonial.css"
import TestimonialCard from './TestimonialCard';


const Testimonial = ({ placedStudents }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="StudentsTestimonials">
            <span className="StudentsTestimonials__heading">Testimonials</span>
            <h4>
                Our Students Speaks
            </h4>

            <div className="StudentsTestimonials__main">
                <Carousel responsive={responsive} showDots>
                    {
                        placedStudents.map((item, index) => (
                            <TestimonialCard key={index} profile={item.profile} name={item.name} review={item.review} company={item.company} />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonial
