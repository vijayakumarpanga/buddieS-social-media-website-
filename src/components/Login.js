import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import "../css/login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChangeEmail = (e) => {
    console.log(e.target.value);
    this.setState({ ...this.state, email: e.target.value });
  };
  handleChangePassword = (e) => {
    console.log(e.target.value);
    this.setState({ ...this.state, password: e.target.value });
  };
  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    console.log(this.state);
    const { email, password } = this.state;
    if (email && password) this.props.dispatch(login(email, password));
  };
  render() {
    const { isInProgress, error } = this.props.auth;
    console.log(this.props);
    return (
      <form className="login-form">
        {error && <div className="error-dailog">{error}</div>}
        <span className="login-signup-header">Log In</span>
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
          {isInProgress ? (
            <button onClick={this.handleSubmit} disabled={isInProgress}>
              Logging In...
            </button>
          ) : (
            <button onClick={this.handleSubmit} disabled={isInProgress}>
              Log In
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
export default connect(mapStateToProps)(Login);
