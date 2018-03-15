import React from 'react'

class BlogPost extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      slug: this.props.match.params.slug,
      post: {},
      next: {},
      prev: {}
    }
  }

  fetchPost(){
    fetch(`/posts/${this.state.slug}`, {
      accept: "application/json"
    })
    .then(response => response.json())
    .then(post => {this.setState({post: post})})
  }

  fetchNext(){
    const encodedStr = encodeURIComponent(this.state.slug)
    fetch(`/posts/${this.state.slug}?next=${encodedStr}`, {
      accept: "application/json"
    })
      .then(response => response.json())
      .then(post => this.setState({next: post}))
  }

  fetchPrevious(){
    const encodedStr = encodeURIComponent(this.state.slug)
    fetch(`/posts/${this.state.slug}?previous=${encodedStr}`, {
      accept: "application/json"
    })
      .then(response => response.json())
      .then(post => this.setState({ previous: post }))
  }

  componentDidMount(){
    this.fetchPost()
    this.fetchNext()
    this.fetchPrevious()
  }



  render(){
    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="post-title">
              {this.state.post.title}
            </h2>
            <p className="post-content">{this.state.post.content}</p>
            <p className="meta-data text-muted">Posted on {this.state.post.ordinal_time}</p>
          </div>
        </div>
      </div>
    );
  };

};

export default BlogPost