import React, { Component } from "react";
import "./aboutstyle.css";

class About extends Component {


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col-9 contentAboutme">
                        <h1>about me</h1>
             
                        <div>I enjoy the entire development process from design to completion. If I can't do what you want, I'll figure it out. Because I love solving problems.</div>
                        <ul>I have been trained in:
 
                            <li>
                            Computer Science applied to JavaScript
                            </li>
                       <li>Browser Based Technologies (HTML, CSS, JavaScript, jQuery)</li>
                       <li>Deployment(Heroku/Netlify)</li>
                       <li>JavaScript</li>
                       <li>Databases (MySQL, MongoDB)</li>
                       <li>Server Side Development (Node.js, Express, MERN Stack)</li>
                       <li>Quality Assurance</li>
                
                        
</ul>
                    </div>
                    <div className="col-3">
                    <img className="myPhoto" src="https://csdojo.github.io/Bootstrap-Portfolio/image/IMG_0151.JPG" alt=""/>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default About;