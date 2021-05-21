import {ADD_POSTS} from "../actions/actionType"


const postIntialState = {
    posts : []
}
export default function posts (state=postIntialState,action){
    console.log("inside reducers ",action.type)
    switch(action.type){
        case ADD_POSTS : {
            console.log("inside ",action.posts)
            return {posts : action.posts }
        }
        default :
        return state
     }   
    }
   
