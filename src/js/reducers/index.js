import { combineReducers } from "redux";

import userReducer from "./user-reducers";

/*
import { routerReducer } from "react-router-redux";
*/

export default combineReducers({
    user: userReducer,
//   form: formReducer,
});