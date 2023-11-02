import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../css/project-page.css"
import server from '../host'
import { IoIosHome } from "react-icons/io"
import ProjectLeft from '../components/ProjectLeft'
import ProjectRight from '../components/projectRight'
import MetaData from '../components/MetaData'


const Project = () => {
    const { name } = useParams()
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await server.get(`/api/project/get?p=${name}`)
                setProjectData(response.data.project)
            } catch (error) {
                alert(error.response.data.message)
            }
        }
        getProject()
    }, [name])
    return (
        <>
            <MetaData title='Projects | PrepBytes' />

            <div className='project_page' style={{ transform: "none" }}>
                <header className='project_page-header data-bg'>
                    <div className="flex-block">
                        <div className="wrapper">
                            <div className="middlebar-items flex-block-items">
                                <div className="site-branding">
                                    <p>Projects</p>
                                    <p>ONE-STOP RESOURCE FOR EVERYTHING RELATED TO CODING</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="project-navigation">
                        <div className="wrapper">
                            <div className="project-navigation-area">
                                <div className="menu">
                                    <ul>
                                        <li className="brand-home">
                                            <Link to='/'><IoIosHome /></Link>
                                        </li>
                                        <li className='project-nav-li'><Link to='/project/html'>HTML</Link></li>
                                        <li className='project-nav-li'><Link to='/project/css'>CSS</Link></li>
                                        <li className='project-nav-li'><Link to='/project/javascript'>JavaScript</Link></li>
                                        <li className='project-nav-li'><Link to='/project/react'>ReactJS</Link></li>
                                        <li className='project-nav-li'><Link to='/project/node'>NodeJS</Link></li>
                                        <li className='project-nav-li'><Link to='/project/mongodb'>MongoDB</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="project_content">
                    <div className='project-content-main-area'>{projectData && projectData?.projects.map((item, index) => (
                        <ProjectLeft image={item.thumb} title={item.title} description={item.description} link={item.link} key={index} />
                    ))}</div>
                    {projectData && <ProjectRight topics={projectData?.topics} />}
                </div>
            </div>
        </>
    )
}

export default Project
