import axios from 'axios';
import React, { Component } from 'react';
import '../login/login.css'

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailerr: "",
    passworderr: ""
  }



  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios({

      method: "POST",
      url: "api/auth/login",
      data: {
        ...this.state
      }
    })
    console.log(res)
    if (res.data.user) {
      console.log(res.data.user.user_id)
      this.setState({
        email: "",
        password: "",
        emailerr: "",
        passworderr: ""
      })
      this.props.history.push("/")
      window.location.reload()
    }
    if (res.data.err) {
      this.setState({
        emailerr: res.data.err.email,
        passworderr: res.data.err.password
      })
    }


  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })


  }





  render() {
    console.log(this.props)
    return (
      <>
        <div className="login">
          <span className="loginTitle">Login</span>
          <form action="" className="loginForm">
            <label>Email</label>
            <input type="text" name="email" onChange={this.handleChange} className="loginInput" placeholder="Enter your email" value={this.state.email} required="true" />
            <span>{this.state.emailerr}</span>
            <label>Password</label>
            <input type="Password" name="password" onChange={this.handleChange} className="loginInput" placeholder="Enter your password" value={this.state.password} required="true" />
            <span>{this.state.passworderr}</span>
            <button className="loginButton" onClick={this.handleSubmit}>Login</button>
          </form>
          <button className="loginRegisterButton">Register</button>
        </div>
      </>
    );

  }
}


export default Login;