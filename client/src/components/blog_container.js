import React from 'react';
import NavBar from "../containers/blog_nav_bar";
import BlogCard from "../containers/blog_card";
import Footer from "../containers/footer";

class BlogComponent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  fetchPosts(){
    fetch('/api/posts', {
      accept: "application/json"})
      .then(response => response.json())
      .then(posts => {
        this.setState({posts: posts})
      })
  }

  formatPreview(post){
    return post.split("\n")[0]
  }

  addPosts(){
    return this.state.posts.map((post, index) =>
      <BlogCard title={post.title} key={index} content={this.formatPreview(post.content)} date={post.ordinal_time} link={`/posts/${post.slug}`}/>
    )
  }

  componentDidMount(){
    this.fetchPosts()
  }

  render(){
    return(
      <React.Fragment>
        <NavBar />
        <div className="spacer-lg"/>
        <div className="container">
          <div className="row justify-content-center">
            {this.addPosts()}
          </div>
        </div>
        <div className="spacer-lg"/>
        <hr/>
        <div className="spacer" />
        <Footer />
        <div className="spacer" />
      </React.Fragment>
    )
  }
}

export default BlogComponent