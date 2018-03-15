import React from 'react'

const BlogCard = (props) => (
  <div className="post-card">
    <Link to={props.link}>
      <h2 className="post-title">{props.title}</h2>
      <h5 className="post-content">{props.content}</h5>
    </Link>
    <p className="meta-data">Posted on {props.date}</p>
  </div>
)

export default BlogCard