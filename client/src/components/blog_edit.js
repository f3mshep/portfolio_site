import React from "react";
import BlogNavBar from "../containers/blog_nav_bar";
import Footer from "../containers/footer";
import TextArea from "../components/blog_text_area";

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      post: null
    };
  }

  fetchPost() {
    fetch(`/posts/${this.state.slug}`, {
      accept: "application/json"
    })
      .then(response => response.json())
      .then(post => {
        this.setState({ post: post });
      });
  }

  componentWillMount() {
    this.fetchPost()
  }

  updatePost(postObject) {
    fetch(`/posts/${this.state.slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: postObject })
    })
    .then(response => {console.log(response)});
  }

  render() {
    return (
      <React.Fragment>
        <BlogNavBar />
        <div className="container">
          <div className="spacer-lg" />
          <div className="row justify-content-center">
            <div className="col-md-12" style={{ textAlign: "center" }}>
              <h2>Edit Post</h2>
            </div>
            <div className="spacer" />
            {this.state.post ? <TextArea
              title={this.state.post.title}
              content={this.state.post.content}
              onSubmit={this.updatePost.bind(this)}
            /> : null}
          </div>
        </div>
        <div className="spacer-lg" />
        <hr />
        <div className="spacer" />
        <Footer />
        <div className="spacer" />
      </React.Fragment>
    );
  }
}

export default EditPost;