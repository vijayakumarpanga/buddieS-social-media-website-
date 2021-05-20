import React, { Component } from 'react';
import '../index.css'
class Post extends Component {
    render() {
        return (
            <div className="post-wrapper">
                <div className="post-avatar">
                  <img src="https://image.flaticon.com/icons/png/128/848/848043.png" alt =""></img>
                  <div>
                      <div>Name</div>
                      <div>a mimute ago</div>
                  </div>
                </div>
                <div>
                    Post Description
                </div>
                <hr/>
                <div>
                    <div>
                    <img src="https://image.flaticon.com/icons/png/128/535/535285.png"></img>
                    <div>4</div>   
                    <img src="https://image.flaticon.com/icons/png/128/1380/1380338.png"></img>
                    <div>3</div>
                    </div>
                </div>
                 <hr/>
                 <div>
                     <input type='text' placeholder=" enter a comment"></input>
                 </div>
               
            </div>
        );
    }
}

export default Post;