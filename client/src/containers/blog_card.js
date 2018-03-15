import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => (
  <div className="post-card col-md-8">
    <Link to={props.link}>
      <h2 className="post-title">{props.title}</h2>
      <p className="post-preview">{props.content}</p>
    </Link>
    <p className="meta-data text-muted">Posted on {props.date}</p>
    <hr/>
  </div>
)

export default BlogCard