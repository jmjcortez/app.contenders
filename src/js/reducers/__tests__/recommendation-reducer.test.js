import recommendationReducer, { initialState } from '../recommendation-reducer';
import { 
  FETCH_RECOMMENDATION_LIST, FETCH_RECOMMENDATION_LIST_SUCCESS, FETCH_RECOMMENDATION_LIST_FAIL
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

  it('should handle user authenticate success', () => {
    const payload = {
      recommendations: ['test', 'test2', 'test3']
    };

    const action = {
      type: FETCH_RECOMMENDATION_LIST,
      payload: payload
    };

    expect(
      recommendationReducer(initialState, action)
    ).toEqual({
      ...initialState,
      recommendations: ['test', 'test2', 'test3']
    });
  });
});