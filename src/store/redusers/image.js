import { LOAD_IMAGES } from "../types";

const initialState = {
  allImages: [],
};

export const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      return { ...state, allImages: action.payload };
    default:
      return state;
  }
};
