import * as FileSystem from "expo-file-system";
import { LOAD_POSTS, BOOKED_POST, DELETE_POST, ADD_POST } from "../types";
import { DB } from "../../db";

export const loadPosts = () => {
  return async dispatch => {
    const posts = await DB.getPosts();
    dispatch({
      type: LOAD_POSTS,
      payload: posts
    });
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

export const addPost = post => async dispatch => {
  const id = await DB.createPost(post)

  const path = post.img.split("/").pop();
  const newPath = FileSystem.documentDirectory + path;

  try {
    FileSystem.moveAsync({
      from: post.img,
      to: newPath
    })
  } catch (e) {
    console.log(e);
  }

  const payload = { ...post, img: newPath };
  payload.id = id

  dispatch({
    type: ADD_POST,
    payload
  });
};
