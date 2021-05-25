import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import "../css/post.css";
import { fetchPosts } from "../actions/posts";
import Navbar from "./Navbar";
import Login from "./Login";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import SignUp from "./SignUp";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../actions/auth";
import UserProfile from "./UserProfile";

 const PrivateRoute=(privateProps)=>{
   console.log("privateProps",privateProps)
  const {path,isLoggedIn,component:Component}= privateProps
  return (<Route path={path}  render={(props)=>{
    console.log("Route props",props)
    return isLoggedIn?(<Component {...props}></Component>)
    :(<Redirect to={{pathname : '/login',
                     state : props.location,
                 }}></Redirect>)
  }}></Route>)
};
class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    console.log("App Mounted")
    const token = localStorage.getItem('token');
    console.log("token", token)
    if(token){
    const   user = jwtDecode(token)
    this.props.dispatch(authenticateUser(user))
    console.log(user)
    }
  }
  componentWillUnmount(){
    console.log("App unmounted")
  }
  
  render() {
    console.log("app rendeer")
    console.log("inside App", this.props.posts);
    return (
      <Router>
        <div>
          {/* 
          <Post></Post> */}
          <Navbar></Navbar>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Post {...props}></Post>;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <PrivateRoute path="/UserProfile" component={UserProfile} isLoggedIn={this.props.auth.isLoggedIn}></PrivateRoute>
          
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts,
          auth:state.auth};
}
export default connect(mapStateToProps)(App);
