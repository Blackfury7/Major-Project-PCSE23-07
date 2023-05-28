import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    We created this as a personal project, and deployed this project
                    so people can use it and mainly the developers can who are learning AI can learn 
                    from this project and make their own AI or they can also improve this project.
                    This is an open source project, The code is available on the GitHub -  <a href="https://github.com/PCSE23-07/Final-Project-PCSE23-07">https://github.com/PCSE23-07/Final-Project-PCSE23-07 </a>
                    
                     This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). I have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    We have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                <div className="developer-info">
                    <h4>About Developer</h4>
                    <p className="about-content">We are a passionate team of three developers with expertise in AI/ML, deep learning, and web development. 
                    Our collective enthusiasm drives us to explore innovative solutions and deliver high-quality results. 
                    </p>
                    <h4>Contact</h4>
                    {/* <a href="https://www.instagram.com/codedharsh75/"><p className="about-content">Instagram</p></a> */}
                    {/* <a href="https://www.youtube.com/channel/UCiD7kslR7lKSaPGSQ-heOWg"><p  className="about-content">Youtube</p></a> */}
                    <a href="https://github.com/Blackfury7"><p  className="about-content">GitHub</p></a>
                </div>
            </div>
        </div>
    )
}
