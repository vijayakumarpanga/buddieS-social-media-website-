import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { clearAuthState } from "../actions/auth";
import { signUp } from "../actions/signUp";

import "../css/login.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  componentWillUnmount(){
    console.log("SignUp Unmounted")
    this.props.dispatch(clearAuthState())
  }
  componentDidMount(){
    console.log("SignUp Mounted")
}
  handleChangeName = (e) => {
    console.log(e.target.value);
    this.setState({ ...this.state, name: e.target.value });
  };
  handleChangeEmail = (e) => {
    console.log(e.target.value);
    this.setState({ ...this.state, email: e.target.value });
  };
  handleChangePassword = (e) => {
    console.log(e.target.value);
    this.setState({ ...this.state, password: e.target.value });
  };
  handleChangeConfirmPassword = (e) => {
    console.log(e.target.value);
    this.setState({ ...this.state, confirmPassword: e.target.value });
  };
  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    console.log(this.state);
    const { name, email, password, confirmPassword } = this.state;
    if (name && email && password && confirmPassword)
      this.props.dispatch(signUp(name, email, password, confirmPassword));
  };
  render() {
    const { isInProgress, error,isLoggedIn } = this.props.auth;
    console.log("Sign up rendered")
    console.log(this.props);
    if(isLoggedIn){
      <Redirect to='/'></Redirect>
    }
    return (
      <form className="login-form">
        {error && <div className="alert error-dailog">{error}</div>}
        <span className="login-signup-header">Sign Up</span>
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={this.handleChangeName}
            value={this.state.name}
          ></input>
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleChangeEmail}
            value={this.state.email}
          ></input>
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="password"
            required
            onChange={this.handleChangePassword}
            value={this.state.password}
          ></input>
        </div>
        <div className="field">
          <input
            type="password"
            placeholder=" Confirm Password"
            required
            onChange={this.handleChangeConfirmPassword}
            value={this.state.confirmPassword}
          ></input>
        </div>
        <div className="field">
          {isInProgress ? (
            <button onClick={this.handleSubmit} disabled={isInProgress}>
              Signing Up...
            </button>
          ) : (
            <button onClick={this.handleSubmit} disabled={isInProgress}>
              Sign Up
            </button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(SignUp);
