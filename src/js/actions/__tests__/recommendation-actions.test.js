import { 
  fetchRecommendationListAction, fetchRecommendationListFailAction, fetchRecommendationListSuccessAction,
  FETCH_RECOMMENDATION_LIST, FETCH_RECOMMENDATION_LIST_SUCCESS, FETCH_RECOMMENDATION_LIST_FAIL 
} from '../recommendation-actions';

describe('Recommendation list actions', () => {
  it('should create a fetch recommendation list action', () => {
      const expectedAction = {
          type: FETCH_RECOMMENDATION_LIST
      };

      expect(fetchRecommendationListAction()).toEqual(expectedAction)
  });

  it('should create a fetch recommendation list success action', () => {
      const payload = {
          test: 'test'
      }

      const expectedAction = {
          type: FETCH_RECOMMENDATION_LIST_SUCCESS,
          payload: payload,
      }

      expect(fetchRecommendationListSuccessAction(payload)).toEqual(expectedAction);
  });

  it('should create a fetch recommendation list fail action', () => {
      const payload = {
          test: 'test'
      }

      const expectedAction = {
          type: FETCH_RECOMMENDATION_LIST_FAIL,
          payload: {
              error: payload
          },
      }

      expect(fetchRecommendationListFailAction(payload)).toEqual(expectedAction);
  });
});
