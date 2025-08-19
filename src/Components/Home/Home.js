import React from 'react'
import "./Home.css"

const Home = () => {
 
  const openResume = () =>{
    window.open("https://drive.google.com/file/d/1btyZrocRlZR-7g0xcNz-Y1sH4p6O_PQD/view?usp=sharing")
  }

  const openProjects1 = () =>{
    window.open("https://github.com/ChaitraR24/TicTacToe")
  }

  const openProjects2 = () =>{
    window.open("https://github.com/ChaitraR24/Calculator")
  }

  const openProjects3 = () =>{
    window.open("https://github.com/ChaitraR24/ReactPortfolio")
  }
  return (
    <>
    <section className='home'>
      <div  className='sub1'>
        <h3>Hello,It's Me</h3>
      <h1 className='name'>Chaitra Ramachandra</h1>
      <h4>Aspiring Web Developer</h4>
        <p>"Aspiring web developer passionate about building clean, responsive, and user-friendly websites using modern technologies."</p>
      <button onClick={openResume}>View My Resume</button>
    </div>
   </section>
    
    <section className="projects">
      <h1>My-Projects</h1>
      <div className="project-list">
        <div className="projectlist">
          <h1>Tic-Tac-Toe</h1>
          <p>"A fun Tic-Tac-Toe game where two players take turns marking Xs and Os until someone wins or it’s a draw."</p>
          <button  onClick={openProjects1} className='btn'>View My Project</button>
        </div>

        <div className="projectlist">
          <h1>Calculator</h1>
          <p>"A simple calculator app that performs basic arithmetic operations like addition, subtraction, multiplication, and division."</p>
           <button onClick={openProjects2} className='btn'>View My Project</button>
        </div>

        <div className="projectlist">
          <h1>My-Portfolio</h1>
          <p>"My portfolio highlights my web development skills and projects, built with React for a clean and neat design."</p>
           <button  onClick={openProjects3} className='btn'>View My Project</button>
        </div>
      </div>
    </section>
     
    
   </>
  )
}

export default Home
