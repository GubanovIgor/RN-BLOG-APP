import { DATA } from "../../../assets/data";
import { LOAD_POSTS, BOOKED_POST } from "../types";

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA
  };
};

export const bookedPost = id => {
  return {
    type: BOOKED_POST,
    payload: id
  }
}
