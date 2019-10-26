export const FETCH_USERS = "FETCH_USERS";
export const fetchUsersAction = () => {
    return {
        type: FETCH_USERS
    }
};

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const fetchUsersSuccessAction = data => {
    return {
        type: FETCH_USERS_SUCCESS,
        data: data
    }
};

export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";
export const fetchUsersFailAction = errors => {
    return {
        type: FETCH_USERS_FAIL,
        data: errors
    }
};