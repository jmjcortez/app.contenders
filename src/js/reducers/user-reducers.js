
import { USER_AUTHENTICATE, USER_AUTHENTICATE_FAIL, USER_AUTHENTICATE_SUCCESS } from "../actions/user-actions";

const initialState = {
    isLoading: false,
    token: '',
    refresh: '',
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATE: {
            return {
                ...state,
                isLoading: true
            };
        }
        
        case USER_AUTHENTICATE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                token: action.payload.access,
                refresh: action.payload.refresh,
            }
        }
        
        default:
            return state;
    }
};

export default userReducer;