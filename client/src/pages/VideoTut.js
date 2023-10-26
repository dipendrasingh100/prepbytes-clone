import React from 'react'
import "../css/video-tut.css"
import VideoLib from "../assets/images/video_lib_illustration.png"

const VideoTut = () => {
  return (
    <div>
      <div className="videoLib-header">
        <div className="videoLib-header-container">
          <div className="left">
            <h1 className="left-top">Prepbytes Video Library</h1>
            <p className="left-bottom">Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place. </p>
          </div>
          <img src={VideoLib} alt="video_lib_illustration" />
          {/* <iframe src="https://drive.google.com/file/d/1SSSx6kqUjVrx6RedIVgwDg2wv75ezc6Z/preview" title='recording'></iframe> */}
        </div>
      </div>
    </div>
  )
}

export default VideoTut
