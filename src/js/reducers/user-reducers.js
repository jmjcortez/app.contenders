
// import { FETCH_USERS, FETCH_USERS_SUCCESS } from "../actions/user-actions";
import { USER_AUTHENTICATE, USER_AUTHENTICATE_FAIL, USER_AUTHENTICATE_SUCCESS } from "../actions/user-actions";

const initialState = {
    isAuthenticating: false,
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        // case FETCH_USERS: {
        //     // return state;
        //     return {
        //         ...state,
        //     };
        // }
        
        // case FETCH_USERS_SUCCESS: {
        //     return {
        //         ...state,
        //         userList: action.data
        //     }
        // }

        case USER_AUTHENTICATE: {
            return {
                ...state,
                isAuthenticating: true,
                aklas: 'aklasik',
            };
        }
        
        case USER_AUTHENTICATE_SUCCESS: {
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