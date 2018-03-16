import React from 'react';
import Footer from '../containers/footer';
import NavRow from '../containers/NavRow';
import BlogNavBar from '../containers/blog_nav_bar';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './codeblock';

class BlogPost extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      slug: this.props.match.params.slug,
      post: {},
      next: null,
      prev: null
    }
  };

  fetchPost(){
    fetch(`/api/posts/${this.state.slug}`, {
      accept: "application/json"
    })
    .then(response => response.json())
    .then(post => {this.setState({post: post})})
  }

  fetchNext(slug){
    const encodedStr = slug || encodeURIComponent(this.state.slug)
    console.log(encodedStr)
    fetch(`/api/posts/${this.state.slug}?next=${encodedStr}`, {
      accept: "application/json"
    })
      .then(response => response.json())
      .then(post => {
        this.setState({next: post})})
  }

  fetchPrevious(slug){
    const encodedStr = slug || encodeURIComponent(this.state.slug)
    console.log(encodedStr)
    fetch(`/api/posts/${this.state.slug}?previous=${encodedStr}`, {
      accept: "application/json"
    })
      .then(response => response.json())
      .then(post => this.setState({ prev: post }))
  }

  handleClickNext(){
    const currentPost = this.state.next
    this.setState({
      prev: this.state.post,
      next: null,
      post: currentPost
    })
    this.fetchNext(currentPost.slug)
  }

  handleClickPrevious(){
    const currentPost = this.state.prev
    this.setState({
      prev: null,
      next: this.state.post,
      post: currentPost
    })
    this.fetchPrevious(currentPost.slug)
  }

  componentDidMount(){
    this.fetchPost()
    this.fetchNext()
    this.fetchPrevious()
  }



  render(){
    return <React.Fragment>
        <BlogNavBar />
        <div className="spacer" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="post-title">{this.state.post.title}</h2>
              <p className="meta-data text-muted">
                Posted on {this.state.post.ordinal_time}
              </p>
              <ReactMarkdown skipHtml={false} escapeHtml={false} renderers={{ code: CodeBlock }} source={this.state.post.content} />
              <div className="spacer" />
            </div>
          </div>
          <NavRow prev={this.state.prev} next={this.state.next} prevCallback={this.handleClickPrevious.bind(this)} nextCallback={this.handleClickNext.bind(this)} />
        </div>
        <div className="spacer" />
        <hr />
        <div className="spacer" />
        <Footer />
        <div className="spacer" />
      </React.Fragment>;
  };

};

export default BlogPost