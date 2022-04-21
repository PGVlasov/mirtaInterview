import axios from "axios";
import { LOAD_IMAGES } from "../types";

export const loadImages = () => {
  try {
    return async (dispatch) => {
      const apiUrl = "https://jsonplaceholder.typicode.com/albums/1/photos";
      await axios.get(apiUrl).then((resp) => {
        const allImages = resp.data;
        dispatch({ type: LOAD_IMAGES, payload: allImages });
      });
    };
  } catch (err) {
    console.log(err);
  }
};
