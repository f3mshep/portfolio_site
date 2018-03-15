import React from 'react'
import Footer from '../containers/footer'
import MyButton from '../containers/my_button'

class BlogPost extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      slug: this.props.match.params.slug,
      post: {},
      next: null,
      prev: null
    }
  }

  fetchPost(){
    fetch(`/posts/${this.state.slug}`, {
      accept: "application/json"
    })
    .then(response => response.json())
    .then(post => {this.setState({post: post})})
  }

  fetchNext(slug){
    const encodedStr = slug || encodeURIComponent(this.state.slug)
    fetch(`/posts/${this.state.slug}?next=${encodedStr}`, {
      accept: "application/json"
    })
      .then(response => response.json())
      .then(post => this.setState({next: post}))
  }

  fetchPrevious(slug){
    const encodedStr = slug || encodeURIComponent(this.state.slug)
    fetch(`/posts/${this.state.slug}?previous=${encodedStr}`, {
      accept: "application/json"
    })
      .then(response => response.json())
      .then(post => this.setState({ previous: post }))
  }

  handleClickNext(){
    const currentPost = this.state.next
    this.setState({
      prev: this.state.post,
      next: null,
      post: currentPost
    })
    this.fetchNext(currentPost)
  }

  handleClickPrevious(){
    const currentPost = this.state.prev
    this.setState({
      prev: null,
      next: this.state.post,
      post: currentPost
    })
    this.fetchPrevious(currentPost)
  }

  componentDidMount(){
    this.fetchPost()
    this.fetchNext()
    this.fetchPrevious()
  }



  render(){
    return(
      <React.Fragment>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="post-title">
                {this.state.post.title}
              </h2>
              <p className="meta-data text-muted">Posted on {this.state.post.ordinal_time}</p>
              <p className="post-content">{this.state.post.content}</p>
              <hr/>
            </div>
          </div>
          <div className="row">
            {this.state.prev ? <MyButton callback={this.handleClickPrevious.bind(this)} value="Previous Post" /> : null}
            {this.state.next ? <MyButton callback={this.handleClickNext.bind(this)} value="Next Post"/> : null}
          </div>
        </div>

        <hr/>
        <Footer/>
      </React.Fragment>
    );
  };

};

export default BlogPost