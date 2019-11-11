import axios from 'axios';

import { 
  userRegisterAction,
  userRegisterSuccessAction,
  userRegisterFailAction
} from '../../actions/user-actions';
import { API } from '../../constants/apis';


export const handleRegister = async (values, dispatch) => {
  dispatch(userRegisterAction());

  try {
    await axios.post(`${API}/api/register`, values);

    dispatch(userRegisterSuccessAction());
  
  } catch (error) {
    dispatch(userRegisterFailAction(error));
  }
};
