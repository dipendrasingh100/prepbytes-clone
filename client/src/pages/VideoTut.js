import React, { useEffect } from 'react'
import "../css/video-tut.css"
import VideoLib from "../assets/images/video_lib_illustration.png"
import VideoCard from '../components/VideoCard'
import { handleLink } from '../utils/helperFuction'
import MetaData from '../components/MetaData'

const VideoTut = () => {
  useEffect(() => {
    handleLink()
  }, [])
  return (
    <div>
      <MetaData title='Video Library | PrepBytes' />

      <div className="videoLib-header">
        <div className="videoLib-header-container">
          <div className="left">
            <h1 className="left-top">Prepbytes Video Library</h1>
            <p className="left-bottom">Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place. </p>
          </div>
          <img src={VideoLib} alt="video_lib_illustration" />
        </div>
      </div>
      <div className="videoLib-main">
        <h2>Categories</h2>
        <div className="videoLib-main-cards">
          <VideoCard title="Competitive Programming" desc="Competitive Programming questions solved by top rated coders" video_url="https://www.youtube.com/embed/1fBfxj6p728?si=ndr4XirB5EWB0UiH" />
          <VideoCard title="Interview Preparation" desc="Commonly asked coding interview questions solved step by step" video_url="https://www.youtube.com/embed/0m8fFrckGLo?si=paslxHa8mvvKP048" />
          <VideoCard title="Data Structures and Algorithms" desc="Basic concepts of Data Structures and Algo and Ds/Algo problems solved" video_url="https://www.youtube.com/embed/2TwFkngcc0g?si=V4pi5k1eUEFgkF_h" />
          <VideoCard title="Aptitude" desc="Aptitude practice questions and puzzles to boost your thinking brain" video_url="https://www.youtube.com/embed/xu-U0hkKE6A?si=7WwKaCGQvLq_YOWu" />
          <VideoCard title="C++ Programming" desc="Deep dive into the fundamentals of C++ programming" video_url="https://www.youtube.com/embed/M_DJ6wUh1xw?si=OChIfKO3yNrcoi1f" />
          <VideoCard title="Operating System" desc="Learn in-depth concepts of Operating Systems easily." video_url="https://www.youtube.com/embed/uLxVAmO6i_k?si=4V_QTXt33kAQObLE" />
        </div>
      </div>
    </div>
  )
}

export default VideoTut
