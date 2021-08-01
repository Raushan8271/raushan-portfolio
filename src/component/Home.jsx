import React from 'react'
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

function Home() {
    return (
        <div className="home section">
            <div className="item__home">
                <div>
                    <h2 style={{borderBottom:"3px solid #03203C"}} className="home__title">Hi, I am Raushan Kumar</h2>
                    <h3 style={{ textAlign: "center" }} className="home__subtitle">Full Stack Web Developer</h3>
                </div>
                <div className="socialIcon">
                    <a className="home__social-icon" href="https://www.linkedin.com/in/raushankr7/" rel="noreferrer" target="_blank" >
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
        </div>
    )
}

export default Home
