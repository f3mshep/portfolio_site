import React from 'react';
import BlogNavBar from '../containers/blog_nav_bar';
import MyButton from '../containers/my_button';
import { withRouter } from 'react-router'

class BlogAuthenticate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:""
    }
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  login(event){
    event.stopPropagation()
    const email = this.state.email
    const password = this.state.password
    const request = { "auth": { "email": email, "password": password } }
    const that = this
    fetch("/user_token", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(request)
    })
    .then(response => {
      if(!response.ok){
        console.log('nope.')
      }
      else{
        return response.json()
      }
    })
    .then(token => {
      localStorage.setItem("jwt", token.jwt)
      that.props.history.push('/posts')
    })
  }

  render(){
    return(
      <React.Fragment>
        <BlogNavBar/>
        <div className="container">
          <div className="spacer-lg"/>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="authenticate-user">Email</label>
                <input className="form-control" id="authenticate-user" type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                <label htmlFor="authenticate-pass" >Password</label>
                <input className="form-control" id="authenticate-pass" type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
                <br/>
                <MyButton blockLevel={true} value="Submit" callback={this.login.bind(this)} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

};

export default withRouter(BlogAuthenticate);