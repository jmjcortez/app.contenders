import { 
  fetchStatsAction, 
  fetchStatsFailAction, 
  fetchStatsSuccessAction,
  FETCH_STATS,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAIL 
} from '../stats-actions';

describe('Authenticate actions', () => {
  it('should create a fetch stats action', () => {
      const expectedAction = {
          type: FETCH_STATS
      };

      expect(fetchStatsAction()).toEqual(expectedAction)
  });

  it('should create a fetch stats success action', () => {
      const payload = {
          test: 'test'
      }

      const expectedAction = {
          type: FETCH_STATS_SUCCESS,
          payload: payload,
      }

      expect(fetchStatsSuccessAction(payload)).toEqual(expectedAction);
  });

  it('should create a fetch stats fail action', () => {
      const payload = {
          test: 'test'
      }

      const expectedAction = {
          type: FETCH_STATS_FAIL,
          payload: {
              error: payload
          },
      }

      expect(fetchStatsFailAction(payload)).toEqual(expectedAction);
  });
});
