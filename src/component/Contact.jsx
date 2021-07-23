import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
    return (
        <div className="contact">
            <h1 style={{ borderBottom: "2px solid black" }}>Contact me</h1>
            <div style={{ marginTop: "5%" }}>
                <h1><FaMobileAlt /> +91-7856074204</h1>
                <h1><AiOutlineMail /> raushan8271@gmail.com</h1>
            </div>
        </div>
    )
}

export default Contact
