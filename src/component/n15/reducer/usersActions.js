export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export function fetchUsersRequest() {
    return {type: FETCH_USERS_REQUEST};
}

export function fetchUsersSuccess(users) {
    return {type: FETCH_USERS_SUCCESS, payload: users};
}

export function fetchUsersError(error) {
    return {type: FETCH_USERS_ERROR, payload: error};
}
