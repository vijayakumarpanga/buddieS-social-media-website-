import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import "../css/post.css";
import { fetchPosts } from "../actions/posts";
import Navbar from "./Navbar";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import SignUp from "./SignUp";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log("inside App", this.props.posts);
    return (
      <Router>
        <div>
          {/* 
        <Post ></Post> */}
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
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(mapStateToProps)(App);
