
import React, { Component } from 'react';
import Post from './Post'
import {connect} from 'react-redux'
import '../css/post.css'
import {fetchPosts} from '../actions/posts'
class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }
  
  render() {
    console.log("inside App",this.props.posts)
    return (
      <div>
        <Post ></Post>
      </div>
    );
  }
}
function mapStateToProps(state){
 return {posts : state.posts}
}
export default connect(mapStateToProps)(App)
