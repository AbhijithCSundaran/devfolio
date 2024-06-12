import React from 'react'
import './About.css'
import passport from '../../assets/images/passport.jpg'
import ProgressBar from '@ramonak/react-progress-bar';

function About() {
    return (
        <div className="row col-sm-12 box-shadow-full">
            <div className="col-md-6">
                <div className="row mb-4">
                    <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                            <img src={passport} className="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                            <p><span className="title-s">Name: </span> <span>Abhijith C.S</span></p>
                            <p><span className="title-s">Profile: </span> <span>Web/UI Developer</span></p>
                            <p><span className="title-s">Email: </span> <span>csabhi007@gmail.com</span></p>
                            <p><span className="title-s">Phone: </span> <span>(+91) 7306116077</span></p>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <p className="title-s">Skill</p>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="me-3">HTML</span>
                        <div className="progressbar">
                            <ProgressBar labelAlignment="center" labelSize="11px" height='13px' bgColor="#000" completed={9} maxCompleted={10} customLabel="9/10" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="me-3">CSS</span>
                        <div className="progressbar">
                            <ProgressBar labelAlignment="center" labelSize="11px" height='13px' bgColor="#000" completed={9} maxCompleted={10} customLabel="9/10" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="me-3">JavaScript</span>
                        <div className="progressbar">
                            <ProgressBar labelAlignment="center" labelSize="11px" height='13px' bgColor="#000" completed={8} maxCompleted={10} customLabel="8/10" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="me-3">jQuery</span>
                        <div className="progressbar">
                            <ProgressBar labelAlignment="center" labelSize="11px" height='13px' bgColor="#000" completed={8} maxCompleted={10} customLabel="8/10" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="me-3">Angular 2+</span>
                        <div className="progressbar">
                            <ProgressBar labelAlignment="center" labelSize="11px" height='13px' bgColor="#000" completed={9} maxCompleted={10} customLabel="9/10" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="me-3">React JS</span>
                        <div className="progressbar">
                            <ProgressBar labelAlignment="center" labelSize="11px" height='13px' bgColor="#000" completed={6} maxCompleted={10} customLabel="6/10" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                        <h5 className="title-left">
                            About me
                        </h5>
                    </div>
                    <p className="lead">
                        More than 5.9 years of experience in a
                        software development as a frond-end UI/Web
                        developer. Strong technical skills in complex
                        website development including web-based
                        applications.
                    </p>
                    <p className="lead">
                        Experience of developing highly
                        interactive web applications utilizing
                        JavaScript, HTML5, CSS, Bootstrap, Flex
                        Layout, jQuery and Angular 2+. Strong
                        foundation in Typescript along with angular.
                    </p>
                    <p className="lead">
                        Expertise in empowering and developing team members and have good hand in problem-solving and multi-tasking.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
