export const FETCH_STATS = "FETCH_STATS";
export const fetchStatsAction = () => {
    return {
        type: FETCH_STATS
    }
};

export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS";
export const fetchStatsSuccessAction = data => {
    return {
        type: FETCH_STATS_SUCCESS,
        payload: data
    }
};

export const FETCH_STATS_FAIL = "FETCH_STATS_FAIL";
export const fetchStatsFailAction = error => {
    return {
        type: FETCH_STATS_FAIL,
        payload: {
            error: error,
        }
    }
};