import React from 'react'
import image from "../files/image.jpg"
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

function Home() {
    return (
        <section className="home section">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
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
                    <div className="home__img">
                        <img src={image} className="home__blob" alt="" />
                    </div>
                    <div className="home__data">
                        <h2 className="home__title">Hi, I am Raushan Kumar</h2>
                        <h3 className="home__subtitle">Full Stack Web Developer</h3>
                        <p className="home__description">Software professional, strong in design and integration with intuitive
                            problem-solving skills. Proficient in HTML, CSS, React.JS, and hands-on
                            practice of more than 200 DSA questions. Passionate about implementing
                            and learning new things, with the ability to translate business requirements
                            into technical solutions. Looking to start my career as an entry-level
                            software engineer with a reputed firm driven by technology.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
