import React from 'react'

const ProjectCard = ({img, title, desc}) => {
  return (
    <div className='StackSyllabus__main--container-card'>
      <div className="StackSyllabus__main--container-card--image">
        <img src={img} alt="thumb" className="StackSyllabus__main--container-card--image-img" />
      </div>
      <p className="StackSyllabus__main--container-card--heading">
        {title}
      </p>
      <p className="StackSyllabus__main--container-card--text">
        {desc}
      </p>
    </div>
  )
}

export default ProjectCard
