import React from 'react';
import BlogNavBar from '../containers/blog_nav_bar';
import Footer from '../containers/footer';
import TextArea from '../components/blog_text_area';

class NewPost extends React.Component {

  constructor(props){
    super(props)
  }

  createPost(postObject){
    fetch("/posts", {
      accept: "application/json",
      method: "post",
      body: JSON.stringify(postObject)
   })
  }

  render(){
    return(
      <React.Fragment>
        <BlogNavBar/>
        <div className="container">
          <div className="row justify-content-center">
            <h2>New Post</h2>
            <br/>
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