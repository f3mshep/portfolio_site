import React from 'react';
import ExpertiseTopic from '../containers/expertise_topic';

//to make a dynamic app, push objects into this container
const expertise = [
  {
    faIcon: "fa-comments",
    boldHeading: "Team Player",
    mutedText: "I believe that strong communication and collaboration between clients and peers alike is the best way to produce an application everyone is happy with!"
  },
  {
    faIcon: "fa-code",
    boldHeading: "Front End",
    mutedText: "I enjoy crafting simple but beautiful user interfaces. My current muse is React paired with Redux, but I know my way around jQuery and vanilla JavaScript too!"
  },
  {
    faIcon: "fa-server",
    boldHeading: "Back End",
    mutedText: "I primarily build web software using Rails, but I can pick up new frameworks and languages in a jiffy. I love programming in server-side languages such as Ruby and Python."
  }
];

class ExpertiseComponent extends React.Component{


  render(){
    let topics = expertise.map((topic, index) => (
      <ExpertiseTopic
        faIcon={topic.faIcon}
        boldHeading={topic.boldHeading}
        mutedText={topic.mutedText}
        key={index}
      />
    ));
    return(
      <section name={this.props.name} id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Expertise</h2>
            <div className="spacer-xl"></div>
          </div>
        </div>
        <div className="row text-center">
          {topics}
        </div>
      </div>
      <div className="spacer-xl"></div>
    </section>
    );
  }
}

export default ExpertiseComponent;