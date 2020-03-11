import { LOAD_POSTS, BOOKED_POST, DELETE_POST, ADD_POST } from "../types";

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: []
  };
};

export const bookedPost = id => {
  return {
    type: BOOKED_POST,
    payload: id
  };
};

export const deletePost = id => {
  return {
    type: DELETE_POST,
    payload: id
  };
};

export const addPost = post => {
  post.id = Date.now().toLocaleString()

  return {
    type: ADD_POST,
    payload: post
  }
}
