import { combineReducers } from "redux";
import tableReducer from "./tableReducer";

const combinedReducers = combineReducers({ tableReducer });

export default combinedReducers;
