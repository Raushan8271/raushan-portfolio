import React from 'react'
import Resume from "../files/Raushan_Kumar_Resume.pdf"
import { FcDownload } from "react-icons/fc";
import image from '../files/image.jpg'
function About() {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="aboutDiv">
                <div className="imgdiv">
                    <img className="profilImage" src={image} alt="" />
                </div>
                <div className="desdiv">
                    <h2 style={{ textAlign: "center" }} className="home__title">Hi, I am Raushan Kumar</h2>
                    <h3 style={{ textAlign: "center" }} className="home__subtitle">Full Stack Web Developer</h3>
                    <p className="home__description">Software professional, strong in design and integration with intuitive
                        problem-solving skills. Proficient in HTML, CSS, React.JS, and hands-on
                        practice of more than 200 DSA questions. Passionate about implementing
                        and learning new things, with the ability to translate business requirements
                        into technical solutions. Looking to start my career as an entry-level
                        software engineer with a reputed firm driven by technology.</p>
                    <div>
                        <a href={Resume} style={{ width: "200px", margin: "auto", padding: "5px", borderRadius: "6px", backgroundColor: "#03203c" }} className="nav__link" download rel="noreferrer" target="_blank">
                            <FcDownload size={"1.2rem"} />
                            Resume
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
