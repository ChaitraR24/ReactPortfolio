import React from "react";

function Projects(){

      const projectList = [
    { name: "Tic-Tac-Toe", desc: "A game using HTML,CSS,JavaScript" },
    { name: "Portfolio Website", desc: "Creative personal portfolio" }
      ];

    return(
        <section id="projects">
          <h2>Projects</h2>
          {projectList.map((project,index) =>(
            <div key={index}>
             <h3>{project.name}</h3>
             <p>{project.desc}</p>
            </div>
          ))}
        </section>
    )
}

export default Projects;