import { combineReducers } from "redux";
import todo from "./todo";
import user from "./user";

const combinedReducer = combineReducers({
  todo,
  user,
});

export default combinedReducer;
