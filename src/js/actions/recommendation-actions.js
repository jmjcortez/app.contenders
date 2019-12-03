export const FETCH_RECOMMENDATION_LIST = "FETCH_RECOMMENDATION_LIST";
export const fetchRecommendationListAction = () => {
    return {
        type: FETCH_RECOMMENDATION_LIST
    }
};

export const FETCH_RECOMMENDATION_LIST_SUCCESS = "FETCH_RECOMMENDATION_LIST_SUCCESS";
export const fetchRecommendationListSuccessAction = data => {
    return {
        type: FETCH_RECOMMENDATION_LIST_SUCCESS,
        payload: data
    }
};

export const FETCH_RECOMMENDATION_LIST_FAIL = "FETCH_RECOMMENDATION_LIST_FAIL";
export const fetchRecommendationListFailAction = error => {
    return {
        type: FETCH_RECOMMENDATION_LIST_FAIL,
        payload: {
            error: error,
        }
    }
};