import axios from 'axios';

import { 
    fetchRecommendationListAction, fetchRecommendationListFailAction, fetchRecommendationListSuccessAction
} from '../../../actions/recommendation-actions';
import { API } from '../../../constants/apis';

export const handleFetchRecommendationList = async (dispatch) => {
    dispatch(fetchRecommendationListAction());

    try {
        const response = await axios.get(`${API}/api/recommendation/`);
        
        dispatch(fetchRecommendationListSuccessAction(response.data));
        
    } catch (error) {
        dispatch(fetchRecommendationListFailAction(error));
    }
};
