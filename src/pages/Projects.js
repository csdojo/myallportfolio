import React, {Component} from "react";
import "./projectstyle.css";

class Projects extends Component {
    state = { isFlipped: "" }

    flip() {

        if (this.state.isFlipped == "flipped") {
        
            this.setState({ isFlipped: "" })
        } else {

            this.setState({ isFlipped: "flipped" })
        }
    }

    saveApp() {
        let appData = {
            key: this.props.id,
            appname: this.props.appname,
            shortDes: this.props.shortDes,
            description: this.props.description,
            image: this.props.image,
            link: this.props.link,
            saved: true
        };
        console.log(appData)
        // fetch .post (/api/app) params = appdata
    }
    render() {
        return (
            
            <div className="card">
                <div className="containerSR">
                    <div className={`cardSR ${this.state.isFlipped}`} onClick={() => this.flip()}>
                        <figure className="front" >
                            <img className="imgProject" src={this.props.image} alt="front" />
                            <div className="caption">
                                <h4>
                                    <span>{this.props.appname}</span>
                                </h4>

                                <p>{this.props.shortDes}</p>

                            </div>
                        </figure>

                        <figure className="back">
                            <img src="http://www.jboeijenga.nl/img/back.jpg" alt="back" />
                            <a href={this.props.link} target="_blank"></a>
                            <div className="caption">
                                <dl>
                                    <dd className="clickmeagain">Click me again to open the app!</dd>
                                    <dd>{this.props.description}</dd>
                                    
                                </dl>
                                
                            </div>
                            
                        </figure>
                    </div>
                </div>
                <div>
                    {/* '"https://loving-murdock-5c6b8c.netlify.com"'  target="_blank" */}
                    <a href={this.props.link} target="_blank" class="btn btn-dark ">Go to APP</a>
                </div>
                
            </div>
            
            
        );
    }
}

export default Projects;