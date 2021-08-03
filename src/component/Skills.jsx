import React from 'react'
function Skills() {
    return (
        <div className="skill">
            <h1>Tech Stack</h1>
            <div className="skilldiv">
                <div  className="skilldivImg">
                    <img style={{width:"60%"}} src="https://cdn.worldvectorlogo.com/logos/html5.svg" alt="" />
                    <h3>HTML</h3>
                </div>
                <div className="skilldivImg">
                    <img src="https://cdn.worldvectorlogo.com/logos/css3.svg" alt="" />
                    <h3>CSS</h3>
                </div>
                <div className="skilldivImg">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png" alt="" />
                    <h3>JavaScript</h3>
                </div>
            </div>
            <div className="skilldiv">
                <div className="skilldivImg">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                    <h3>React.js</h3>
                </div>
                <div className="skilldivImg">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" alt="" />
                    <h3>Redux</h3>
                </div>
                <div className="skilldivImg">
                    <img src="https://material-ui.com/static/logo.png" alt="" />
                    <h3>MaterialUI</h3>
                </div>
            </div>
            <div className="skilldiv">
                <div className="skilldivImg">
                    <img src="https://iconape.com/wp-content/png_logo_vector/node-js-2.png" alt="" />
                    <h3>Node.js</h3>
                </div>
                <div className="skilldivImg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoOopWY1x4tYRirSoIos2ckNH4l0qosX6-8XWZbKhzf-Vv4dpL1fR_YN9CYZ-pfqoKZM&usqp=CAU" alt="" />
                    <h3>Express.js</h3>
                </div>
                <div className="skilldivImg">
                    <img src="https://www.ictdemy.com/images/5728/mdb.png" alt="" />
                    <h3>MongoDB</h3>
                </div>
            </div>
        </div>
    )
}

export default Skills
