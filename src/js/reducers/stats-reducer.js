import { 
  FETCH_STATS, FETCH_STATS_FAIL, FETCH_STATS_SUCCESS,
} from "../actions/stats-actions";

export const initialState = {
  isLoading: false,
  contendersNearbyCount: 0,
  contendersFightingInCity: 0,
  contendersFightingInCountry: 0,
  contendersGlobalCount: 0,
  contendersPerDiscipline: {},
  contendersPerCombatType: {},
  error: {},
};

const statsReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_STATS: {
        return {
            ...state,
            isLoading: true,
            error: {},
        };
    }
    
    case FETCH_STATS_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            error: {},
            contendersNearbyCount: action.payload.contenders_nearby_count,
            contendersFightingInCity: action.payload.contenders_fighting_city_count,
            contendersGlobalCount: action.payload.contenders_global_count,
            contendersFightingInCountry: action.payload.contenders_fighting_country_count,
            contendersPerDiscipline: action.payload.contenders_per_discipline,
            contendersPerCombatType: action.payload.contenders_per_combat_type,
        }
    }

    case FETCH_STATS_FAIL: {
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

export default statsReducer;