import React from 'react';
import Project from '../containers/project';
import MagicMaker from '../img/portfolio/magic.png';
import Sudoku from '../img/portfolio/sudoku2.jpg';
import Keto from '../img/portfolio/keto2.jpg';
import Excel from '../img/portfolio/excel.jpg';
import Carousel from 'nuka-carousel';
import NavIcons from '../containers/navigation_icon';


const settings = {
  slidesToShow: 3,
  slidesToScroll: 1
};



const projects = [
  {
    link: "https://stark-harbor-64502.herokuapp.com/",
    pic: Keto,
    boldTitle: "KetoTonight",
    mutedText: "Find ketogenic recipes that you can make tonight, using a 'pantry' search!"
  },
  {
    link: "https://sudoku-now.herokuapp.com/",
    pic: Sudoku,
    boldTitle: "SudokuNow",
    mutedText: "Play the classic puzzle game Sudoku in a sleek user interface."
  },
  {
    link: "https://the-magic-maker.herokuapp.com/",
    pic: MagicMaker,
    boldTitle: "MagicMaker",
    mutedText: "Join a Magic: the Gathering Card social network with deckbuilding."
  },
  {
    link: "http://www.alexandrawright.net/apps/json",
    pic: Excel,
    boldTitle: "JSON to CSV",
    mutedText: "Quickly convert JSON to a CSV file, all in the browser!"
  }
];

class Projects extends React.Component{

  getProjects(){
    return projects.map((project, index)=>
      <Project link={project.link} pic={project.pic} key={index}
      boldTitle={project.boldTitle} mutedText={project.mutedText} />
    );
  }

  getSlideAmount(){
    if (this.props.width < 750){
      return 1;
    }
    else if(this.props.width < 1000){
      return 2;
    }
    else{
      return 3;
    }
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
            <Carousel decorators={NavIcons} width={"100%"} framePadding={"-40px 75px 40px 75px"} cellSpacing={10}  slidesToShow={this.getSlideAmount()} wrapAround={true}>{myProjects}</Carousel>
          </div>
        </div>
    </section>);
  }
}

export default Projects;