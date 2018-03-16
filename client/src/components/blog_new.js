import React from 'react';
import BlogNavBar from '../containers/blog_nav_bar';
import Footer from '../containers/footer';
import TextArea from '../components/blog_text_area';
import { withRouter } from 'react-router'

class NewPost extends React.Component {

  createPost(postObject){
    const token = "Bearer " + localStorage.getItem("jwt")
    const that = this
    fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": token},
      body: JSON.stringify({post: postObject})
   })
   .then(response =>{
     if (response.ok){
       that.props.history.push('/posts')
     }
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

export default withRouter(NewPost)