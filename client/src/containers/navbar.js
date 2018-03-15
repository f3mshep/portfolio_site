import React from 'react';
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"
class NavBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      navClass: "navbar navbar-expand-lg transparent"
    };
  }

  toggleNavbar(){
    this.setState({
      navClass: this.state.navClass === "navbar navbar-expand-lg transparent" ?
      "navbar navbar-expand-lg navbar-shrink fixed-top" : "navbar navbar-expand-lg transparent"
    });
  }

  componentWillReceiveProps(nextProps){
    if(this.props.isSticky !== nextProps.isSticky){
      this.toggleNavbar();
    }
  }

  render(){
    return <div>
        <nav className={this.state.navClass} id="mainNav">
          <div className="container">
            <Link activeClass="not-active" className="navbar-brand nav-link" to="header-component" spy={true} smooth={true} duration={500}>
              alexandra wright
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="expertise-component" spy={true} smooth={true} duration={500}>
                    Expertise
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="project-component" spy={true} smooth={true} duration={500}>
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="about-component" spy={true} smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="contact-component" spy={true} smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <RouterLink className="nav-link" to="/posts">
                    Blog
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>;
  }

};

export default NavBar
