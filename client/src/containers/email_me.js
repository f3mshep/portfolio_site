import React from 'react';

const EmailMe = (props) =>(
<div>    
  <div className="fa-stack">
    <i className="fa fa-circle fa-stack-2x text-primary"></i>
    <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
  </div>
  <a className="email-me" href="mailto: alexandra.carlsonwright@gmail.com">alexandra.carlsonwright@gmail.com</a>
  <div className="spacer"></div>
</div>
);

export default EmailMe;