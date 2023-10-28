import React from 'react'

const projectRight = ({ topics }) => {
    return (
        <>
            <aside >
                <div>
                    <div className="project-topics">
                        <h2>Topics</h2>
                        <ul>
                            {
                                topics && topics.map((item, index) => (
                                    <li className='topic' key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default projectRight
