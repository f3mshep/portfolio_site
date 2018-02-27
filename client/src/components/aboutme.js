import React from 'react'
import ProfileCard from '../containers/profile_card'
import ProfileText from '../containers/profile_text'

const profileCard = {
  name: "Fullstack Software Engineer",
  text: "Let's get social!",
  twitter: "https://www.twitter.com/f3mshep",
  github: "https://www.github.com/f3mshep",
  linkedIn: "https://www.linkedin.com/in/alexandra-c-wright/"
};


class AboutMe extends React.Component{

  render(){
    return(
    <section name={this.props.name} className="bg-light" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">About</h2>
            <div className="spacer-xl"></div>
          </div>
        </div>
        <div className="row">
          <ProfileCard card={profileCard} />
          <ProfileText />
        </div>
        <div className="row">
          <div className="spacer-xl"></div>
        </div>
      </div>
    </section>
    )
  }

}

export default AboutMe;