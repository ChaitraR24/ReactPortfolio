import React from "react";
import './About.css'
import myphoto from "../Assests/myphoto.jpeg"

function About(){
    return(

      <div className="main">
        <section id="aboutme">
        <h2>About Me</h2>
            <p> I want to become a skilled web developer by learning new technologies and improving my skills. My goal is to get a good
                position where I can grow, work on real projects, and build a strong career in web development.I am eager to collaborate
                with experienced professionals and contribute to innovative solutions. I am committed to continuous learning and staying
                updated with the latest industry trends.</p>

      </section>
      <div className="forimg">
     <img src={myphoto} alt="" />
      </div>
      </div>
    )
}

export default About;