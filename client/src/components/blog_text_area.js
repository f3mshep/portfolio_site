import React from 'react';
import MyButton from '../containers/my_button'

class TextArea extends React.Component{
  constructor(props){
    super(props)
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

  componentWillMount(){
    this.setState({
      title: this.props.title,
      content: this.props.content
    })
  }

  render(){
    return(
      <div className="col-md-10">
        <form>
          <div className="form-group">
            <br/>
            <label htmlFor="blog-form-title">Title</label>
            {this.props.title? <h3>{this.props.title}</h3> : <input type="text" onChange={this.handleTitleChange} class="form-control" value={this.state.title} id="blog-form-title"/>}
            <br/>
            <label htmlFor="blog-content">Content</label>
            <textarea className="form-control" onChange={this.handleContentChange} id="blog-content" rows="24" value={this.state.content} />
          </div>
          <MyButton callback={this.handleSubmit.bind(this)} value="Submit"/>
        </form>
      </div>
    );
  }

}

export default TextArea;