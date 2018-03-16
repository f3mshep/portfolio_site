import React from 'react'

let defaultClass = "btn btn-outline-secondary"

const MyButton = (props) => (
  <button
  onClick={props.callback}
  className={props.className ? props.className : defaultClass}>{props.value}</button>
);

export default MyButton