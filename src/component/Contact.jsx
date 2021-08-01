import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
    return (
        <div className="contact">
            <h1 className="getin">GET IN TOUCH</h1>
            <div className="contactDiv">
                <div>
                    <div className="mobile">
                        <h1 style={{ margin: "0", color: "#fff" }}>Mobile No:</h1>
                        <a style={{ color: "#fff" }} className="noa" href="tel:+91-7856074204"><FaMobileAlt /> +91-7856074204</a>
                    </div>
                </div>
                <div>
                    <div className="mobile">
                        <h1 style={{ margin: "0", color: "#fff" }}>Email:</h1>
                        <a style={{ color: "#fff" }} className="noa" href="mailto:raushan8271@gmail.com"><AiOutlineMail />raushan8271@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
