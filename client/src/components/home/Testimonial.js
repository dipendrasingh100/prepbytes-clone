import React, { useState } from 'react'
import "../../css/home/testimonial.css"

const placedStudents = [
    {
        name: "Yuvraj",
        company: "Nagarro",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/placement-preparation-program/Yuvraj.png",
        review: "Thanks PrepBytes Your course really helped me lot , helped me Crack my company Nagarro through my campus placements. I also cracked TCS Codevita.Thank you so much"
    },
    {
        name: "Aquib",
        company: "Squareboat",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/placement-preparation-program/Aquib.png",
        review: "The program started with providing me with a personalized plan which stretched for about 4-5 month including lectures, live sessions.During the course, the students were constantly shared with upcoming job opportunities. Overall it was a great learning experience which immensely helped me prepare for placements, especially technical interviews."
    },
    {
        name: "Akshay",
        company: "Indiamart",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/placement-preparation-program/Akshay_indiamart.png",
        review: "A wonderful place to learn. PrepBytes helped me in learning important topics for coding interiew and also getting placed in Indiamart. "
    },
    {
        name: "Nazim",
        company: "Samsung",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/placement-preparation-program/Najim_samsung-1.png",
        review: "Being from the ECE branch I have started my coding from scratch in my final year. It took me 3–4 months to improve my coding skills. Believe me, so all you need to have some patience & desire to learn within just 3–4 months you will see a huge difference in yourself. I would really recommend you to join the courses at Prepbytes."
    },
    {
        name: "Chelsea",
        company: "Juspay",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/placement-preparation-program/chelsea_Juspay-1.png",
        review: "Prepbytes really helped me start my prep from basic. The teachers are really helpful and were always available to clear my doubts. Thats the reason I was able to crack the interview and land an internship."
    },
    {
        name: "Aditya",
        company: "BUYHatke",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/placement-preparation-program/aditya.png",
        review: "One stop solution for placement preparations. Contains live as well as  recorded videos for theory. Also huge emphasis is given on problem solving and clearing of concepts."
    },
    {
        name: "Datta Mortha",
        company: "Amazon",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Datta+Mortha.jpg",
        review: "I got placed in Amazon, thanks PrepBytes for your help. My mentor was very helpful and has been very particular about my preparation through out, even if I would miss out something she would point it out which helped me in preparing better."
    },
    {
        name: "Nikhil",
        company: "SAP Labs",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Nikhil.jpg",
        review: "I enrolled in PrepBytes Zenith Placement Program to get help in placement preparations for tech giants and got placed in SAP labs. I got a mentor who was very knowledgeable & guided me throughout my placement journey."
    },
    {
        name: "Shivani Ravi",
        company: "SAP Labs",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/shivani+Ravi.jpg",
        review: "PrepBytes have helped me improve my analytical skills. They have helped me in all the ways possible. The understanding of questions and logic has also increased. Now I can solve questions and understand the logic."
    },
    {
        name: "Kanika Kala",
        company: "Microsoft",
        profile: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/testimonials/Kanika+kala.png",
        review: "Yes. It is extremely useful. PrepBytes team is very helpful, experienced and skilled. It is one of the best Placement programs for IT companies. As an Engineering fresher, I found it really helpful. I enrolled for zenith program in April 2019 and I got placed on campus Microsoft in August 2019."
    },
]

const Testimonial = () => {

    const [student, setStudent] = useState(0)
    return (
        <div className='PrepTestimonials__main'>
            <div className="PrepTestimonials__main-top">
                <p className="PrepTestimonials__main-top--text">
                    100% of our students finishing the course have got placed
                </p>
            </div>

            <div className="PrepTestimonials__main-container">
                <div className="PrepTestimonialsTop">
                    <div className="PrepTestimonialsTop__slide">
                        <div className="PrepTestimonialsTop__slide__item">
                            {placedStudents[student].review}
                        </div>
                    </div>
                </div>

                <div className="PrepTestimonialsBottom">
                    <div className="PrepTestimonialsBottom__box">
                        <div className="PrepTestimonialsBottom__box_container">
                            <img src="" alt="" className="PrepTestimonialsBottom__box_0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
