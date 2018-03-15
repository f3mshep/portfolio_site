import React from 'react'

const MyButton = (props) => (
  <button
  onClick={props.callback}
  className={props.className ? props.className : "btn btn-outline-secondary"}>{props.value}</button>
);

export default MyButton