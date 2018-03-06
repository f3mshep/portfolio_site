  import React from 'react'

const Project = (props) =>(
  <div className="portfolio-item">
    <a className="portfolio-link" href={props.link}>
      <div className="portfolio-hover">
        <div className="portfolio-hover-content">
        </div>
      </div>
      <img className="img-fluid" src={props.pic} alt=""/>
    </a>
    <div className="portfolio-caption">
      <h4>{props.boldTitle}</h4>
      <p className="text-muted">{props.mutedText}</p>
    </div>
  </div>
)

export default Project