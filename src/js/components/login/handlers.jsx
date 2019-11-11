import axios from 'axios';

import { 
    userAuthenticateAction, 
    userAuthenticateSuccessAction,
    userAuthenticateFailAction,
} from '../../actions/user-actions';

import { API } from '../../constants/apis';

export const handleAuthenticate = async (values, dispatch) => {
    dispatch(userAuthenticateAction());

    try {
        const response = await axios.post(`${API}/auth/token/`, values);
        
        dispatch(userAuthenticateSuccessAction(response.data));
        
    } catch (error) {
        dispatch(userAuthenticateFailAction(error));
    }
};
