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