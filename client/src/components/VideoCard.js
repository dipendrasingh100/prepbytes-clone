import React from 'react'
import "../css/video-card.css"

const VideoCard = ({ title, desc, video_url }) => {
    return (
        <div className='video-card-main'>
            <div>
                <div className="video-card-video">
                    <iframe src={video_url} title={title} allowFullScreen style={{border:"0px"}}></iframe>
                </div>
                <div className="video-card-text">
                    <p>{title}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
