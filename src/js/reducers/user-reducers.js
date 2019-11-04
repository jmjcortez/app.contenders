
import { 
    USER_AUTHENTICATE, 
    USER_AUTHENTICATE_FAIL, 
    USER_AUTHENTICATE_SUCCESS 
} from "../actions/user-actions";

export const initialState = {
    isLoading: false,
    token: '',
    refresh: '',
    error: {},
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATE: {
            return {
                ...state,
                isLoading: true,
                error: {},
            };
        }
        
        case USER_AUTHENTICATE_SUCCESS: {
            window.localStorage.setItem("JWT", action.payload.access);
            window.localStorage.setItem("REFRESH_JWT", action.payload.refresh);
            return {
                ...state,
                isLoading: false,
                token: action.payload.access,
                refresh: action.payload.refresh,
                error: {},
            }
        }

        case USER_AUTHENTICATE_FAIL: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }            
        }
        
        default:
            return state;
    }
};

export default userReducer;