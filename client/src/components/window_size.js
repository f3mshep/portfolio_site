import React from 'react';

// adapted from:
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs


// Note to future self:
// This class measures WINDOW size, not component size. might
// want to change to component size if issues crop up

class WindowSize extends React.Component{
  // class will pass the window dimensions to a single
  // child element
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    return(
      <div>
        {React.cloneElement(this.props.children, {width: this.state.width, height: this.state.height})}
      </div>
    );
  }
}

export default WindowSize