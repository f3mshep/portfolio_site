import React, { Component } from 'react';
import PageContainer from './containers/page_container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import BlogIndex from './components/blog_container'

class App extends Component {
  render() {
    return <Router>
      <React.Fragment>
        <Route exact path="/" component={PageContainer} />
        <Route path="/posts" component={BlogIndex} />
      </React.Fragment>
    </Router>;
  }
}

export default App;
