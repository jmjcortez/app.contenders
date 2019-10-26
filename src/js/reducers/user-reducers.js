
import { FETCH_USERS, FETCH_USERS_SUCCESS } from "../actions/user-actions";

const initialState = {
    userList: [],
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USERS: {
            // return state;
            return {
                ...state,
                userList: ['Aklas', 'Loonie'],
                aklas: 'aklasik',
            };
        }
        
        case FETCH_USERS_SUCCESS: {
            return {
                ...state,
                userList: action.data
            }
        }
        
        default:
            return state;
    }
};

export default userReducer;