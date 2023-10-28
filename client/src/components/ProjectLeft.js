import React from 'react'
import { HiOutlineExternalLink } from "react-icons/hi"
const ProjectLeft = ({ image, title, description, link }) => {
    return (
        <>
            <div className="project_content_area">
                <h1>{title}</h1>
                <a href={link} target='_blank' rel='noreferrer'>Demo
                    <HiOutlineExternalLink />
                </a>
                <div className="project-entry-content">
                    <p>
                        <img src={image} alt="html" />
                    </p>
                    <p className='project-desc'>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProjectLeft
