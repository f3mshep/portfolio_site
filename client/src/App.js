import React, { Component } from 'react';
import PageContainer from './containers/page_container';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BlogIndex from './components/blog_container';
import BlogPost from './components/blog_post';
import BlogNew from './components/blog_new';

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={PageContainer} />
        <Route exact path="/posts" component={BlogIndex} />
        <Route exact path="/posts/new" component={BlogNew}/>
        <Route path="/posts/:slug" component={BlogPost} />
      </Switch>
    </Router>;
  }
}

export default App;
