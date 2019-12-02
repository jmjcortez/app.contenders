import axios from 'axios';

import { 
    fetchStatsAction, fetchStatsSuccessAction, fetchStatsFailAction
} from '../../actions/stats-actions';
import { API } from '../../constants/apis';

export const handleFetchStats = async (values, dispatch) => {
    dispatch(fetchStatsAction());

    try {
        const response = await axios.post(`${API}/auth/token/`, values);
        
        dispatch(fetchStatsSuccessAction(response.data));
        
    } catch (error) {
        dispatch(fetchStatsFailAction(error));
    }
};
