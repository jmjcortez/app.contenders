import { 
    userAuthenticateAction, 
    userAuthenticateFailAction, 
    userAuthenticateSuccessAction,
    userRegisterAction,
    userRegisterFailAction,
    userRegisterSuccessAction,
    USER_AUTHENTICATE,
    USER_AUTHENTICATE_SUCCESS,
    USER_AUTHENTICATE_FAIL,
    USER_REGISTER,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS, 
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

// describe('Register actions', () => {
//     it('should create a user register action', () => {
//         const expectedAction = {
//             type: USER_REGISTER
//         };

//         expect(userRegisterAction()).toEqual(expectedAction)
//     });

//     it('should create a user register success action', () => {

//         const expectedAction = {
//             type: USER_REGISTER_SUCCESS,
//         }

//         expect(userRegisterSuccessAction()).toEqual(expectedAction);
//     });

//     it('should create a user register fail action', () => {
//         const payload = {
//             test: 'test'
//         }

//         const expectedAction = {
//             type: USER_REGISTER_FAIL,
//             payload: {
//                 error: payload
//             },
//         }

//         expect(userRegisterFailAction(payload)).toEqual(expectedAction);
//     });
// });
