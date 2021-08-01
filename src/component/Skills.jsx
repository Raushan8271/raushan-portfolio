import React from 'react'
function Skills() {
    return (
        <div className="skill">
            <h1>Tech Stack</h1>
            <div className="skilldiv">
                <div style={{width:"15%"}} className="skilldivImg">
                    <img src="https://cdn.worldvectorlogo.com/logos/html5.svg" alt="" />
                </div>
                <div className="skilldivImg">
                    <img src="https://cdn.worldvectorlogo.com/logos/css3.svg" alt="" />
                </div>
                <div className="skilldivImg">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png" alt="" />
                </div>
            </div>
            <div className="skilldiv">
                <div className="skilldivImg">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                </div>
                <div className="skilldivImg">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" alt="" />
                </div>
                <div className="skilldivImg">
                    <img src="https://material-ui.com/static/logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills
