import React from 'react';
import MyButton from '../containers/my_button'

class TextArea extends React.Component{
  constructor(props){
    this.state = {
      title: "",
      content: ""
    }
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContentChange(event){
    this.setState({content: event.target.value})
  }

  handleTitleChange(event){
    this.setState({title: event.target.value})
  }

  handleSubmit(){
    this.props.onSubmit(this.state)
  }

  render(){
    return(
      <form>
        <div className="form-group">
          <label for="blog-form-title">Title</label>
          {this.props.title? <h3>{this.props.title}</h3> : <input type="text" class="form-control" id="blog-form-title"/>}
          <label for="blog-content">Content</label>
          <textarea className="form-control" onChange={this.handleContentChange} id="blog-content" rows="12">{this.props.content}</textarea>
        </div>
        <MyButton callback={this.props.onSubmit} value="Submit"/>
      </form>
    );
  }

}

export default TextArea;