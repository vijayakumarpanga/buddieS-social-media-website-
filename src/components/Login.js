import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { clearAuthState, login } from "../actions/auth";
import "../css/login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  componentWillUnmount(){
    console.log("Login Unmounted")
    this.props.dispatch(clearAuthState())
  }
  componentDidMount(){
    console.log("Login Mounted")
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
    const { isInProgress, error,isLoggedIn} = this.props.auth;
    console.log("inside login",this.props);
    const {location}= this.props.location.state|| {location :{pathname: '/'}}
    if(isLoggedIn){
      return  (
        <Redirect to={location.pathname}></Redirect>
      )
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
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
