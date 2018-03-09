import React from 'react'
import createReactClass from 'create-react-class';

const NavIcons = [{
  component: createReactClass({
    render() {
      return (
        <i
          className={"fa fa-nav fa-chevron-left"}
          onClick={this.props.previousSlide}>
        </i>
      )
    }
  }),
  position: 'CenterLeft',
},
{
  component: createReactClass({
    render() {
      return (
        <i
          onClick={this.props.nextSlide}
          className={"fa fa-nav fa-chevron-right"}>
        </i>
      )
    }
  }),
  position: 'CenterRight',
}];

export default NavIcons
