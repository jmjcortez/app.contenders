import { 
    userAuthenticateAction, 
    userAuthenticateFailAction, 
    userAuthenticateSuccessAction,
    USER_AUTHENTICATE,
    USER_AUTHENTICATE_SUCCESS,
    USER_AUTHENTICATE_FAIL 
} from '../user-actions';

describe('Authenticate actions', () => {
    it('should create a user authenticate action', () => {
        const expectedAction = {
            type: USER_AUTHENTICATE
        };

        expect(userAuthenticateAction()).toEqual(expectedAction)
    });

    it('should create a user authenticate success action', () => {
        const payload = {
            test: 'test'
        }

        const expectedAction = {
            type: USER_AUTHENTICATE_SUCCESS,
            payload: payload,
        }

        expect(userAuthenticateSuccessAction(payload)).toEqual(expectedAction);
    });

    it('should create a user authenticate fail action', () => {
        const payload = {
            test: 'test'
        }

        const expectedAction = {
            type: USER_AUTHENTICATE_FAIL,
            payload: {
                error: payload
            },
        }

        expect(userAuthenticateFailAction(payload)).toEqual(expectedAction);
    });
});
