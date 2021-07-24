import React from 'react'
import jiomart from '../files/jiomart.png'
import fashionwala from '../files/fashionwala.png'

function Project() {
    return (
        <div className="project">
            <h1>Project</h1>
            <div className="projectdiv">
                <div className="proFirstDiv">
                    <div className="imgDiv">
                        <img style={{ borderRadius: "10px" }} src={jiomart} alt="jiomart" />
                        <div className="btnDiv">
                            <a href="https://github.com/kamlendr/Jiomart" target="_blank" rel="noopener noreferrer"><button className="btnbtn">Source Code</button></a>
                            <a href="https://jiomart.netlify.app/" rel="noreferrer" target="_blank"><button className="btnbtn">Demo</button></a>
                        </div>
                    </div>
                    <div className="imgDiv">
                        <img style={{ borderRadius: "10px" }} src={fashionwala} alt="jiomart" />
                        <div className="btnDiv">
                            <a href="https://fashionwala.netlify.app/" rel="noreferrer" target="_blank"><button className="btnbtn">Source Code</button></a>
                            <a href="https://github.com/Raushan8271/fashionwala" rel="noreferrer" target="_blank"><button className="btnbtn">Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
