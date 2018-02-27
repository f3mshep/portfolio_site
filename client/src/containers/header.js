import React from 'react'
import { Link } from "react-scroll";
const Header = props => (
  // make this a fullscreen hero
  <header name={props.name} className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Hi, I'm Alexandra</div>
        <div className="intro-heading text-uppercase">
          Let's build something together.
        </div>
        <Link
          activeClass="active"
          className="btn btn-primary btn-xl text-uppercase"
          to="expertise-component"
          spy={true}
          smooth={true}
          duration={500}
        >
          Tell Me More
        </Link>
      </div>
    </div>
  </header>
);

export default Header;