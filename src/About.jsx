import React from "react"
import { UndrawDesignerLife } from "react-undraw-illustrations"

const About = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two columns grid">
                <div class="column">
                    <UndrawDesignerLife primaryColor='#12283a' height='200px' />
                </div>
                <div class="column">
                    <h1 className="ui header">About Me</h1>
                    <p>
                        This is an about me section. Wow. You know me so well.
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default About