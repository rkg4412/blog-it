import axios from 'axios';
import React, { Component } from 'react';
import '../register/register.css'

class Register extends Component {

  state = {
    name: "",
    username: "",
    password: "",
    email: "",
    emailerr: "",
    passerr: "",


  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await axios({
      method: "POST",
      url: "api/auth/signup",
      data: { ...this.state }

    })
    if (resp.data.user) {
      console.log(resp.data.user)
      this.setState({
        name: "",
        username: "",
        password: "",
        email: "",
        emailerr: "",
        passerr: "",


      })
      this.props.history.push("/")
    }
    if (resp.data.err) {
      this.setState({
        emailerr: resp.data.err.email,
        passerr: resp.data.err.password
      })

    }

  }


  render() {
    return (
      <>
        <div className="register">
          <span className="registerTitle">Register</span>
          <form action="" className="registerForm">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} className="registerInput" placeholder="Enter your name" onChange={this.handleChange} />
            <label>Username</label>
            <input type="text" name="username" value={this.state.username} className="registerInput" placeholder="Enter your username" onChange={this.handleChange} />
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} className="registerInput" placeholder="Enter your email" onChange={this.handleChange} />
            <span>{this.state.emailerr}</span>
            <label>Password</label>
            <input type="text" name="password" value={this.state.password} className="registerInput" placeholder="Enter your password" onChange={this.handleChange} />
            <span>{this.state.passerr}</span>

            <button className="registerButton" onClick={this.handleSubmit}>Register</button>
          </form>
          <button className="registerLoginButton">Login</button>
        </div>
      </>
    );
  }
}



export default Register