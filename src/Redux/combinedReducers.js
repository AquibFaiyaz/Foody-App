import { combineReducers } from "redux";
import tableReducer from "./tableReducer";
import navbarReducer from "./navbarReducer";
import dishSuggestReducer from "./dishSuggestReducer";

const combinedReducers = combineReducers({
  tableReducer,
  navbarReducer,
  dishSuggestReducer,
});

export default combinedReducers;
