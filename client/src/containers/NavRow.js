import React from 'react';
import NavIconLeft from './nav_icon_left';
import NavIconRight from './nav_icon_right';

const NavRow = (props) => (
  <div className="row">
    <div className="mr-auto col-md-2" style={{ textAlign: "center" }}>
      {props.prev ? <NavIconLeft callback={props.prevCallback} /> : null}
    </div>
    <div className="ml-auto col-md-2" style={{ textAlign: "center" }}>
      {props.next ? <NavIconRight callback={props.nextCallback} /> : null}
    </div>
  </div>
);

export default NavRow;