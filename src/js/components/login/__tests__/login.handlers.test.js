import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { handleAuthenticate } from '../login.handlers';

import { API } from '../../../constants/apis';

import { 
    USER_AUTHENTICATE, USER_AUTHENTICATE_SUCCESS
} from '../../../actions/user-actions';

describe('Authenticate test', () => {

    it('should dispatch user authenticate success on success', async () => {
        const mock = new MockAdapter(axios);
        mock.onPost(`${API}/auth/token/`).reply(200, {
            data: {
                access: 'test access',
                refresh: 'test refresh',
            }
        });

        const dispatch = jest.fn();

        const values = {
            email: 'test@test.com',
            password: 'password'
        }
        
        await handleAuthenticate(
            values,
            dispatch,  
        );

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: USER_AUTHENTICATE,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: USER_AUTHENTICATE_SUCCESS,
            payload: {
                 data: {
                    access: "test access",
                    refresh: "test refresh",
                },
            },
        });
    });

    // it('should dispatch user authenticate fail on wrong credentials', async () => {
    //     const mock = new MockAdapter(axios);
    //     mock.onPost(`${API}/auth/token/`).reply(401);

    //     const dispatch = jest.fn();

    //     const values = {
    //         email: 'test@test.com',
    //         password: 'password'
    //     }
        
    //     const response = await handleAuthenticate(
    //         values,
    //         dispatch,  
    //     );

    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(dispatch).toHaveBeenNthCalledWith(1, {
    //         type: USER_AUTHENTICATE,
    //     });
    //     expect(dispatch).toHaveBeenNthCalledWith(2, {
    //         type: USER_AUTHENTICATE_FAIL,
            
    //     });
    // });
});