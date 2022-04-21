import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ImageReducer } from "./redusers/image";

const rootReducer = combineReducers({ image: ImageReducer });

export default createStore(rootReducer, applyMiddleware(thunk));
