import React from "react"
import { UndrawDesignerLife } from "react-undraw-illustrations"

const About = () => {
    return (
        <div className="ui main container">
            <div className="ui stackable two columns grid">
                <div className="column">
                    <UndrawDesignerLife primaryColor='#12283a' height='200px' />
                </div>
                <div className="column">
                    <h1 className="ui header">About Me</h1>
                    <p>
                        My name is Hunter Vitous and I am attending Craft Academy's coding bootcamp in hopes to become a developer.<br />
                        I have taken industrial engineering classes as well as SolidWorks/3D printing courses.<br />
                        On my free time I enjoy playing video games. I hope you enjoy this website!
                    </p>
                </div>
            </div>
        </div>        
    )
}

export default About