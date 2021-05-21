import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../css/post.css'
class Post extends Component {
    render() {
        const {posts} = this.props.posts
        console.log("inside Post",this.props)
        return (

            <div>
           { posts.map(post=>{return(
            <div className="post-wrapper" key={post._id}>
                <div className="post-header">
                <div className="post-avatar">
                  <img src="https://image.flaticon.com/icons/png/128/848/848043.png" alt =""></img>
                  <div className ="">
                      <span className="post-author">{post.user.name}</span>
                      <span className="post-time">{post.createdAt}</span>
                  </div>
                </div>
                </div>
                <div className="post-content">
                   {post.content}
                </div>
              
                <div>
                    <div className="post-actions">
                    <div className="post-likes">
                    <img src="https://image.flaticon.com/icons/png/128/535/535285.png"></img>
                    <span>{post.likes.length}</span>
                    </div>   
                   
                    <div className="post-comment-icon"> <img src="https://image.flaticon.com/icons/png/128/1380/1380338.png"></img>
                    <span>{post.comments.length}</span>
                    </div>
                    </div>
                </div>
                
                 <div className="post-comment-box">
                     <input type='text' placeholder=" enter a comment"></input>
                 </div>
                 <div>
                { post.comments.map(comment=>{return(
                    <div className="post-comment-list" key={comment._id}>
                    <div className="post-comment-item">
                    <div className="post-comment-header">
                      <span className="post-cooment-author">{comment.user.name}</span>
                      <span className="post-comment-time">{comment.createdAt}</span>  
                      <span className="post-comment-likes">{comment.likes.length}</span>  
                     </div>
                     <div className="post-comment-content">
                         {comment.content}
                     </div>
                     </div>
                    </div>
                )}) }</div>
            </div>
           )})
       }
         </div>   );
    }
}


function mapStateToProps(state){
 return {posts : state.posts}
}
export default connect(mapStateToProps)(Post)