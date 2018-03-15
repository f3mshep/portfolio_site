import React from 'react';
import BlogNavBar from '../containers/blog_nav_bar';
import Footer from '../containers/footer';
import TextArea from '../components/blog_text_area';

class NewPost extends React.Component {

  constructor(props){
    super(props)
  }

  createPost(postObject){
    debugger
    fetch("/posts", {
      accept: "application/json",
      method: "post",
      body: JSON.stringify({post: postObject})
   })
  }

  render(){
    return(
      <React.Fragment>
        <BlogNavBar/>
        <div className="container">
          <div className="spacer-lg"/>
          <div className="row justify-content-center">
            <div className="col-md-12" style={{textAlign: "center"}}><h2>New Post</h2></div>
            <div className="spacer"/>
            <TextArea onSubmit={this.createPost.bind(this)} />
          </div>
        </div>
        <div className="spacer-lg" />
        <hr />
        <div className="spacer" />
        <Footer />
        <div className="spacer" />
      </React.Fragment>
    );
  };
};

export default NewPost