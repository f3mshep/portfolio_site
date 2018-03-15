import React, { Component } from 'react';
import PageContainer from './containers/page_container';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BlogIndex from './components/blog_container';
import BlogPost from './components/blog_post';

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={PageContainer} />
        <Route exact path="/posts" component={BlogIndex} />
        <Route path="/posts/:slug" component={BlogPost} />
      </Switch>
    </Router>;
  }
}

export default App;
