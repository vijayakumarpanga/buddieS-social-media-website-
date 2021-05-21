import {ADD_POSTS} from './actionType'
export const addPosts=(posts)=>{
    
   return {
        type : ADD_POSTS,
        posts : posts        
    }

}
export const fetchPosts=()=>{
    console.log("inside fetch post")
    return function(dispatch){
        const url = "http://codeial.codingninjas.com:8000/api/v2/posts?page=1&limit=5"
        fetch(url).then(response=>{ 
        return response.json()
    }).then((data)=>{
           console.log(data.data.posts)
            dispatch(addPosts(data.data.posts))
    })
}
}