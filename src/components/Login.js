import React, { Component } from "react";
import "../css/login.css";
class Login extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input type="email" placeholder="Email" required></input>
        </div>
        <div className="field">
          <input type="password" placeholder="password" required></input>
        </div>
        <div className="field">
          <button>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
