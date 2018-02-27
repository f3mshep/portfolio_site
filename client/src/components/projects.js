import React from 'react';
import Project from '../containers/project';
import MagicMaker from '../img/portfolio/magic.png';
import Sudoku from '../img/portfolio/sudoku2.jpg'
import Keto from '../img/portfolio/keto2.jpg'

const projects = [
  {
    link: "https://stark-harbor-64502.herokuapp.com/",
    pic: Keto,
    boldTitle: "KetoTonight",
    mutedText: "Find ketogenic recipes that you can make tonight, using a specialized 'pantry' search!"
  },
  {
    link: "https://sudoku-now.herokuapp.com/",
    pic: Sudoku,
    boldTitle: "SudokuNow",
    mutedText: "Play the classic puzzle game Sudoku in a sleek user interface. Save your game, and pick up right where you left off."
  },
  {
    link: "https://the-magic-maker.herokuapp.com/",
    pic: MagicMaker,
    boldTitle: "MagicMaker",
    mutedText: "Join a Magic: the Gathering Card social network that provides detailed statistics and card prices"
  }
];

class Projects extends React.Component{

  getProjects(){
    return projects.map((project, index)=>
      <Project link={project.link} pic={project.pic} key={index}
      boldTitle={project.boldTitle} mutedText={project.mutedText} />
    );

  }

  render(){
    const myProjects = this.getProjects()
    return (
    <section name={this.props.name} className="bg-white" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                <p><a href="mailto: alexandra.carlsonwright@gmail.com">Contact me</a> to see more</p>
              </h3>
            </div>
          </div>
          <div className="row">
            {myProjects}
          </div>
        </div>
    </section>);
  }
}

export default Projects;