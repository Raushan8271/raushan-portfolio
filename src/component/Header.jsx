import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FcHome, FcAbout, FcDownload, FcMindMap, FcBusinessContact, FcWorkflow } from "react-icons/fc";
import Resume from "../files/Raushan_Kumar_Resume.pdf"

function Header() {
    const showDiv = useRef()
    const handleShowDiv = () => {
        showDiv.current.style.bottom = 0
    }
    const handleHideDiv = () => {
        showDiv.current.style.bottom = "-100%"
    }
    return (
        <header className="header">
            <nav className="nav container">
                <Link to={"/"} className="nav__logo" >
                    Raushan Kumar
                </Link>
                <div ref={showDiv} className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to={"/"} className="nav__link" onClick={handleHideDiv}>
                                <FcHome className="nav__icon" size={"1.2rem"} />
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to={"/about"} className="nav__link" onClick={handleHideDiv}>
                                <FcAbout className="nav__icon" size={"1.2rem"} />
                                About me
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to={"/skills"} className="nav__link" onClick={handleHideDiv}>
                                <FcMindMap className="nav__icon" size={"1.2rem"} />
                                Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to={"/project"} className="nav__link" onClick={handleHideDiv}>
                                <FcWorkflow className="nav__icon" size={"1.2rem"} />
                                Project
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to={"/contact"} className="nav__link" onClick={handleHideDiv} >
                                <FcBusinessContact className="nav__icon" size={"1.2rem"} />
                                Contact
                            </Link>
                        </li>
                        <li className="nav__item">
                            <a href={Resume} className="nav__link" download rel="noreferrer" target="_blank">
                                <FcDownload className="nav__icon" size={"1.2rem"} />
                                Resume
                            </a>
                        </li>
                    </ul>
                    <FaTimes onClick={handleHideDiv} className="nav__close nav__icon" size={"1.2rem"} />
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
