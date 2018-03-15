import React from 'react'
import { Link } from "react-router-dom"
import NavBar from "../containers/blog_nav_bar"

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

  componentDidMount(){
    this.fetchPosts()
  }

  render(){
    return(
      <div>
        <NavBar isStick={true}/>
      </div>
    )
  }
}

export default BlogComponent