import statsReducer, { initialState } from '../stats-reducer';
import { 
  FETCH_STATS, FETCH_STATS_FAIL, FETCH_STATS_SUCCESS
} from '../../actions/stats-actions';
import userReducer from '../user-reducers';

describe('Stats reducer', () => {
  it('should return initial state', () => {
    const action = {
      type: undefined
    };

    expect(
      statsReducer(initialState, action)
    ).toEqual(initialState);
  });

  it('should handle fetch action', () => {
    const action = {
      type: FETCH_STATS,
    }

    expect(
      statsReducer(initialState, action)
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: {},
    });
  });

  it('should handle user authenticate success', () => {
    const payload = {
      contenders_nearby_count: 100,
      contenders_fighting_city_count: 100,
      contenders_global_count: 100,
      contenders_fighting_country_count: 100,
      contenders_per_discipline: {
        test: 1,
        test2: 2
      },
      contenders_per_combat_type: {
        test: 1,
        test2: 2
      }
    };

    const action = {
      type: FETCH_STATS_SUCCESS,
      payload: payload
    }

    expect(
      statsReducer(initialState, action)
    ).toEqual({
      ...initialState,
      isLoading: false,
      contendersNearbyCount: 100,
      contendersFightingInCity: 100,
      contendersGlobalCount: 100,
      contendersFightingInCountry: 100,
      contendersPerDiscipline: {
        test: 1,
        test2: 2        
      },
      contendersPerCombatType: {
        test: 1,
        test2: 2 
      }
    });
  });

  it('should handle fetch stats fail', () => {
    const error = {
        message: 'test error'
    };

    const action = {
        type: FETCH_STATS_FAIL,
        payload: {
            error: error
        },
    };

    expect(
        statsReducer(initialState, action)
    ).toEqual({
        ...initialState,
        isLoading: false,
        error: error,
    });
  });

});