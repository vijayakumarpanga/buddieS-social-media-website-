
import React, { Component } from 'react';
import Post from './Post'
import {connect} from 'react-redux'
import '../css/post.css'
import {fetchPosts} from '../actions/posts'
import Navbar from './Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }
  
  render() {
    console.log("inside App",this.props.posts)
    return (
      <Router>
      <div>
        {/* <Navbar></Navbar>
        <Post ></Post> */}
        <Route path="/" component={Navbar}></Route>
        <Route path="/" component={Post}/>
      </div>
      </Router>
    );
  }
}
function mapStateToProps(state){
 return {posts : state.posts}
}
export default connect(mapStateToProps)(App)
