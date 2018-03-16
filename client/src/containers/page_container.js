import React from 'react'
import AboutMe from '../components/aboutme';
import Project from '../components/projects';
import ExpertiseComponent from '../components/expertise';
import Map from '../components/map'
import Header from './header';
import NavBar from './navbar'
import Footer from './footer';
import Contact from '../components/contact';
import Waypoint from 'react-waypoint';
import WindowSize from '../components/window_size';
import AnimatedWrapper from '../components/animated_wrapper';

class PageContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      stickyNavbar: false
    };
  }

  hideStickyNavbar(){
    this.setState({stickyNavbar: false});
  }

  showStickyNavbar(){
    this.setState({stickyNavbar: true});
  }

  render(){
    return(
      <div>
        <NavBar isSticky={this.state.stickyNavbar}/>
        <Header name={"header-component"}/>
        <ExpertiseComponent name={"expertise-component"}/>
          <Waypoint onEnter={this.showStickyNavbar.bind(this)} onLeave={this.hideStickyNavbar.bind(this)}>
            <div>
              <WindowSize><Project name={"project-component"}/></WindowSize>
              <AboutMe name={"about-component"}/>
              <Contact name={"contact-component"} />
              <Map/>
              <Footer/>
            </div>
          </Waypoint>
      </div>
    );
  };
}

export default PageContainer;