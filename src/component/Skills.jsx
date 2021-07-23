import React from 'react'
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiJava, DiMaterializecss } from "react-icons/di";
function Skills() {
    return (
        <div className="skill">
            <h1>Tech Stack</h1>
            <div className="skills">
                <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                    <h2 style={{borderBottom:"2px solid black",marginBottom:"15px"}}>Front End</h2>
                    <ul>
                        <li className="li"><DiHtml5 size={"1.5rem"} /> HTML</li>
                        <li className="li"> <DiCss3 size={"1.5rem"} />CSS</li>
                        <li className="li"><DiJavascript size={"1.5rem"} /> JavaScript</li>
                        <li className="li"><DiReact size={"1.5rem"} />React.js</li>
                        <li className="li"><DiJava size={"1.5rem"} />Core Java</li>
                        <li className="li"><DiMaterializecss size={"1.5rem"} />Material UI</li>
                    </ul>
                </div>
                <div className="divSkill" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                    <h2 style={{borderBottom:"2px solid black",marginBottom:"15px"}}>DS & Algorithm</h2>
                    <ul>
                        <li className="li">Array</li>
                        <li className="li">Sorting</li>
                        <li className="li">Stacks</li>
                        <li className="li">Queues</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
