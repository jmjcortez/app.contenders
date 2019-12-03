import { 
  FETCH_RECOMMENDATION_LIST, FETCH_RECOMMENDATION_LIST_FAIL, FETCH_RECOMMENDATION_LIST_SUCCESS,
} from '../actions/recommendation-actions';

export const initialState = {
  isLoading: false,
  error: {},
  currentRecommendation: {},
  recommendationList: []
};

const recommendationReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDATION_LIST: {
        return {
            ...state,
            isLoading: true,
            error: {},
        };
    }
    
    case FETCH_RECOMMENDATION_LIST_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            error: {},
            recommendationList: action.payload.recommendations
        }
    }

    case FETCH_RECOMMENDATION_LIST_FAIL: {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error,
        }            
    }
    
    default:
        return state;
  }
}

export default recommendationReducer;