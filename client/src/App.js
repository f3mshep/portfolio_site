import React, { Component } from 'react';
import PageContainer from './containers/page_container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import BlogIndex from './containers/blog_container'

class App extends Component {
  render() {
    return <Router>
        <Route path="/" component={PageContainer} />
        <Route path="/blogs" component={BlogIndex} />
      </Router>;
  }
}

export default App;
