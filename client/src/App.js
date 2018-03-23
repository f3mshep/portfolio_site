import React, { Component } from 'react';
import PageContainer from './containers/page_container';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogIndex from './components/blog_container';
import BlogPost from './components/blog_post';
import BlogNew from './components/blog_new';
import BlogEdit from './components/blog_edit';
import BlogDelete from './components/blog_delete';
import BlogAuthenticate from './components/blog_authenticate';
import NotFound from './components/not_found';

class App extends Component {
  render() {
    return <Router>
        <Switch>
          <Route exact path="/" component={PageContainer} />
          <Route exact path="/posts" component={BlogIndex} />
          <Route exact path="/posts/:slug/edit" component={BlogEdit} />
          <Route exact path="/posts/new" component={BlogNew} />
          <Route exact path="/authenticate" component={BlogAuthenticate} />
          <Route path="/posts/:slug" component={BlogPost} />
          <Route exact path="/posts/:slug/delete" component={BlogDelete} />
          <Route exact path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>;
  }
}

export default App;
