import React, { Component } from 'react';
import PageContainer from './containers/page_container';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogIndex from './components/blog_container';
import BlogPost from './components/blog_post';
import BlogNew from './components/blog_new';
import BlogEdit from './components/blog_edit';
import AnimatedRoutes from './components/animated_wrapper';

class App extends Component {
  render() {
    return(
      <div>
        <AnimatedRoutes>
          <Route exact path="/" component={PageContainer} />
          <Route exact path="/posts" component={BlogIndex} />
          <Route exact path="/posts/:slug/edit" component={BlogEdit} />
          <Route exact path="/posts/new" component={BlogNew} />
          <Route path="/posts/:slug" component={BlogPost} />
        </AnimatedRoutes>
      </div>
    );
  }
}

export default App;