import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable two columns grid">
        <div className="column">
          <UndrawDesignerLife primaryColor="#12283a" height="200px" />
        </div>
        <div className="column">
          <h1 className="ui header" id="about-header">
            About Me
          </h1>
          <p>
            My name is Hunter Vitous and I am attending Craft Academy's coding
            bootcamp in hopes to become a developer.
            <br />
            I have taken industrial engineering classes as well as SolidWorks/3D
            printing courses.
            <br />
            On my free time I enjoy playing video games.
            <br />
            Please click the Linkedin icon to visit my profile on Linkedin.
          </p>
        </div>
        <a
          className="linkedinlink"
          id="linkedin-image"
          target="_blank"
          href="https://www.linkedin.com/in/hunter-vitous-07839a10b/"
        >
          <img className="linkedin" src="dist/images/linkedin_link.png"></img>
        </a>
      </div>
    </div>
  );
};

export default About;
