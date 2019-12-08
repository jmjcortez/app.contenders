import recommendationReducer, { initialState } from '../recommendation-reducer';
import { 
  FETCH_RECOMMENDATION_LIST, FETCH_RECOMMENDATION_LIST_SUCCESS, FETCH_RECOMMENDATION_LIST_FAIL, SET_NEXT_RECOMMENDED_USER
} from '../../actions/recommendation-actions';


describe('Recommendation list reducer', () => {
  it('should return initial state', () => {
    const action = {
      type: undefined
    };

    expect(
      recommendationReducer(initialState, action)
    ).toEqual(initialState);
  });

  it('should handle fetch recommendation action', () => {
    const action = {
      type: FETCH_RECOMMENDATION_LIST,
    }

    expect(
      recommendationReducer(initialState, action)
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: {}
    });
  });

  it('should handle fetch authenticate success', () => {
    const payload = {
      recommendations: ['test', 'test2', 'test3']
    };

    const action = {
      type: FETCH_RECOMMENDATION_LIST_SUCCESS,
      payload: payload
    };

    expect(
      recommendationReducer(initialState, action)
    ).toEqual({
      ...initialState,
      recommendationList: ['test', 'test2'],
      currentRecommendation: 'test3'
    });
  });

  it('should set next recommended user', () => {
    const state = {
      ...initialState,
      recommendationList: ['test', 'test2', 'test3'],
      currentRecommendation: ['test4']
    };

    const action = {
      type: SET_NEXT_RECOMMENDED_USER
    };

    expect(
      recommendationReducer(state, action)
    ).toEqual({
      ...state,
      recommendationList: ['test', 'test2'],
      currentRecommendation: 'test3'
    });
  });
});