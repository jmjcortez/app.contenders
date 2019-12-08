import { 
  FETCH_RECOMMENDATION_LIST, FETCH_RECOMMENDATION_LIST_FAIL, FETCH_RECOMMENDATION_LIST_SUCCESS,
  SET_NEXT_RECOMMENDED_USER,
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
            recommendationList: action.payload.recommendations,
            currentRecommendation: action.payload.recommendations.pop()
        }
    }

    case FETCH_RECOMMENDATION_LIST_FAIL: {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error,
        }            
    }

    case SET_NEXT_RECOMMENDED_USER: {
      return {
        ...state,
        currentRecommendation: state.recommendationList.length !== 0 ? state.recommendationList.pop() : state.currentRecommendation
      }
    }
    
    default:
        return state;
  }
}

export default recommendationReducer;