import { ADD_POSTS } from "./actionType";
import { APIUrls } from "../helpers/urls";
export const addPosts = (posts) => {
  return {
    type: ADD_POSTS,
    posts: posts,
  };
};
export const fetchPosts = () => {
  console.log("inside fetch post");
  return function (dispatch) {
    const url = APIUrls.fetchPost(1, 5);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.posts);
        dispatch(addPosts(data.data.posts));
      });
  };
};
