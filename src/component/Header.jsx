import React, { useRef } from 'react'
import { FaTimes } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FcHome, FcAbout, FcDownload, FcMindMap, FcBusinessContact, FcWorkflow } from "react-icons/fc";
import Resume from "../files/Raushan_Kumar_Resume.pdf"

function Header() {
    const showDiv = useRef()
    const handleShowDiv = () => {
        showDiv.current.style.bottom = 0
    }
    const handleHide = () => {
        showDiv.current.style.bottom = "-100%"
    }
    const handleHideDiv = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')

        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 20
        })

        showDiv.current.style.bottom = "-100%"
    }
    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo" onClick={handleHideDiv} >
                    𝓡𝓐𝓤𝓢𝓗𝓐𝓝 𝓚𝓤𝓜𝓐𝓡
                </a>
                <div ref={showDiv} className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={handleHideDiv}>
                                <FcHome className="nav__icon" size={"1.2rem"} />
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={handleHideDiv}>
                                <FcAbout className="nav__icon" size={"1.2rem"} />
                                About me
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={handleHideDiv}>
                                <FcMindMap className="nav__icon" size={"1.2rem"} />
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#project" className="nav__link" onClick={handleHideDiv}>
                                <FcWorkflow className="nav__icon" size={"1.2rem"} />
                                Project
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={handleHideDiv} >
                                <FcBusinessContact className="nav__icon" size={"1.2rem"} />
                                Contact
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href={Resume} className="nav__link" download rel="noreferrer" target="_blank">
                                <FcDownload className="nav__icon" size={"1.2rem"} />
                                Resume
                            </a>
                        </li>
                    </ul>
                    <FaTimes onClick={handleHide} className="nav__close nav__icon" size={"1.2rem"} />
                </div>
                <div className="nav__btns">
                    <div className="nav__toggle">
                        <AiOutlineAppstore onClick={handleShowDiv} size={"1.5rem"} />
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header
