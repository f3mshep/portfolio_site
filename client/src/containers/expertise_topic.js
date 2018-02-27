import React from 'react'

const ExpertiseTopic = (props) =>(
  <div className="col-md-4">
    <span className="fa-stack fa-4x">
      <i className="fa fa-circle fa-stack-2x text-primary"></i>
      <i className={props.faIcon + " fa fa-stack-1x fa-inverse"}></i>
    </span>
    <h4 className="service-heading">{props.boldHeading}</h4>
    <p className="text-muted">{props.mutedText}</p>
  </div>
)

export default ExpertiseTopic