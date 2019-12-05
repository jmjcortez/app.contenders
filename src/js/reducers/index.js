import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './user-reducers';
import statsReducer from './stats-reducer';
import recommendationReducer from './recommendation-reducer';

/*
import { routerReducer } from "react-router-redux";
*/

export default combineReducers({
    user: userReducer,
    form: formReducer,
    stats: statsReducer,
    recommendation: recommendationReducer
});