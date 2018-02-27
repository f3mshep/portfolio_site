import React from 'react'

const ContactContent = (props) =>(
  <div>
    <p className="form-control-static">{props.contactText.heading}&nbsp; </p>
    <button onClick={props.handleClick} className="btn btn-primary">{props.contactText.button}</button>
  </div>
);

export default ContactContent