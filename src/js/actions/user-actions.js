// CHANGE TO FIGHTERS
// export const FETCH_USERS = "FETCH_USERS";
// export const fetchUsersAction = () => {
//     return {
//         type: FETCH_USERS
//     }
// };

// export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// export const fetchUsersSuccessAction = data => {
//     return {
//         type: FETCH_USERS_SUCCESS,
//         data: data
//     }
// };

// export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";
// export const fetchUsersFailAction = errors => {
//     return {
//         type: FETCH_USERS_FAIL,
//         data: errors
//     }
// };

export const USER_AUTHENTICATE = "USER_AUTHENTICATE";
export const userAuthenticateAction = () => {
    return {
        type: USER_AUTHENTICATE
    }
};

export const USER_AUTHENTICATE_SUCCESS = "USER_AUTHENTICATE_SUCCESS";
export const userAuthenticateSuccessAction = data => {
    return {
        type: USER_AUTHENTICATE_SUCCESS,
        data: data
    }
};

export const USER_AUTHENTICATE_FAIL = "USER_AUTHENTICATE_FAIL";
export const userAuthenticateFailAction = errors => {
    return {
        type: USER_AUTHENTICATE_FAIL,
        data: errors
    }
};