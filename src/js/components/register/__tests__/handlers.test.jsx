import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { handleRegister } from '../handlers';
import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
} from '../../../actions/user-actions';

import { API } from '../../../constants/apis';

describe('Register test', () => {
  it('should dispatch user register action on register success', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(`${API}/api/register/`).reply(201);

    const dispatch = jest.fn();

    const values = {
      email: 'test@test.com',
      password: 'password',
      first_name: 'test',
      last_name: 'test',
    };

    await handleRegister(values, dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: USER_REGISTER,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: USER_REGISTER_SUCCESS,
    });
  });
});