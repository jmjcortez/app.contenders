import axios from 'axios';

import { 
    fetchStatsAction, fetchStatsSuccessAction, fetchStatsFailAction
} from '../../../actions/stats-actions';
import { API } from '../../../constants/apis';

export const handleFetchStats = async (dispatch) => {
    dispatch(fetchStatsAction());

    try {
        const response = await axios.get(`${API}/api/stats/overview/`);
        
        dispatch(fetchStatsSuccessAction(response.data));
        
    } catch (error) {
        dispatch(fetchStatsFailAction(error));
    }
};
