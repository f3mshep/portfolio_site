import React from 'react';
import BlogNavBar from '../containers/blog_nav_bar';
import MyButton from '../containers/my_button';

class BlogAuthenticate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username:"",
      password:""
    }
  }

  handleUsernameChange(event){
    this.setState({username: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  login(){
    const username = this.state.username
    const password = this.state.password
    const request = { "auth": { "username": username, "password": password } }
    console.log(request)
    $.ajax({
      url: "http://localhost:3000/api/user_token",
      type: "POST",
      data: request,
      dataType: "json",
      success: function (result) {
        console.log(result)
        localStorage.setItem("jwt", result.jwt)
      }
    })
  }

  render(){
    return(
      <React.Fragment>
        <BlogNavBar/>
        <div className="container">
          <div className="row">
            <form>
              <div className="form-group">
                  <label htmlFor="authenticate-user">Username</label>
                  <input className="form-control" type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
                  <label htmlFor="authenticate-pass" >Password</label>
                  <input className="form-control" type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
                </div>
                <MyButton callback={this.login.bind(this)}/>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }

}