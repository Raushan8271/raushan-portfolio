import React from 'react'
import image from "../files/image.jpg"
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

function Home() {
    return (
        <div className="home section">
            <div >
                <div>
                    <h2 className="home__title">Hi, I am Raushan Kumar</h2>
                    <h3 className="home__subtitle">Full Stack Web Developer</h3>
                </div>
                <div className="socialIcon">
                    <a className="home__social-icon" href="https://www.linkedin.com/in/raushan-kumar-398356191/" rel="noreferrer" target="_blank" >
                        <FiLinkedin />
                    </a>
                    <a className="home__social-icon" href="https://github.com/Raushan8271" target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                    <a className="home__social-icon" href="https://twitter.com/Raushansingh98" target="_blank" rel="noopener noreferrer">
                        <FiTwitter />
                    </a>
                </div>
            </div>
            <div style={{width:"50%"}} className="home__img">
                <img src={image} className="home__blob" alt="" />
            </div>
        </div>
    )
}

export default Home
