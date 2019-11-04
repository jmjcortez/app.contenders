import userReducer, { initialState } from '../user-reducers';
import { 
    USER_AUTHENTICATE, 
    USER_AUTHENTICATE_FAIL, 
    USER_AUTHENTICATE_SUCCESS 
} from '../../actions/user-actions';

describe('Authenticate reducer', () => {
    afterEach(() => {
        window.localStorage.clear();
    });
    
    it('should return initial state', () => {
       const action = {
           type: undefined
       }
        expect(
            userReducer(initialState, action)
        ).toEqual(initialState);
    });

    it('should handle user authenticate', () => {
        const action = {
            type: USER_AUTHENTICATE,
        }

        expect(
            userReducer(initialState, action)
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });

    it('should handle user authenticate success', () => {
        const payload = {
            access: 'test access',
            refresh: 'test refresh',
            error: {},
            isLoading: false,
        };

        const action = {
            type: USER_AUTHENTICATE_SUCCESS,
            payload: payload,
        };

        expect(
            userReducer(initialState, action)
        ).toEqual({
            ...initialState,
            isLoading: false,
            token: 'test access',
            refresh: 'test refresh',
            error: {},
        });
        expect(window.localStorage.getItem("JWT")).toEqual('test access');
        expect(window.localStorage.getItem("REFRESH_JWT")).toEqual('test refresh');
    });

    it('should handle user authenticate fail', () => {
        const error = {
            message: 'test error'
        };

        const action = {
            type: USER_AUTHENTICATE_FAIL,
            payload: {
                error: error
            },
        };

        expect(
            userReducer(initialState, action)
        ).toEqual({
            ...initialState,
            isLoading: false,
            error: error,
        });
        expect(window.localStorage.getItem("JWT")).toEqual(null);
        expect(window.localStorage.getItem("REFRESH_JWT")).toEqual(null);
    });
});
