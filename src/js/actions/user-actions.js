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
        payload: data
    }
};

export const USER_AUTHENTICATE_FAIL = "USER_AUTHENTICATE_FAIL";
export const userAuthenticateFailAction = error => {
    return {
        type: USER_AUTHENTICATE_FAIL,
        payload: {
            error: error,
        }
    }
};

export const USER_REGISTER = "USER_REGISTER";
export const userRegisterAction = () => {
    return {
        type: USER_REGISTER
    }
};

export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const userRegisterSuccessAction = () => {
    return {
        type: USER_REGISTER_SUCCESS,
    }
};

export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const userRegisterFailAction = error => {
    return {
        type: USER_REGISTER_FAIL,
        payload: {
            error: error,
        }
    }
};