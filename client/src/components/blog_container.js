import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "../containers/blog_nav_bar";
import BlogCard from "../containers/blog_card";


class BlogComponent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  fetchPosts(){
    fetch('/posts', {
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
    return this.state.posts.map(post =>
      <BlogCard title={post.title} content={this.formatPreview(post.content)} date={post.ordinal_time} link={`/posts/${post.slug}`}/>
    )
  }

  componentDidMount(){
    this.fetchPosts()
  }

  render(){
    return(
      <div>
        <NavBar />
        <div className="spacer-lg"/>
        <div className="container">
          <div className="row justify-content-center">
            {this.addPosts()}
          </div>
        </div>
      </div>
    )
  }
}

export default BlogComponent