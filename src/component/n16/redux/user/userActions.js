export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

function fetchUsersRequest() {
    return {type: FETCH_USERS_REQUEST};
}

function fetchUsersSuccess(users) {
    return {type: FETCH_USERS_SUCCESS, payload: users};
}

function fetchUsersError(error) {
    return {type: FETCH_USERS_ERROR, payload: error};
}

export function fetchUsers() {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => dispatch(fetchUsersSuccess(users)))
            .catch(error => dispatch(fetchUsersError(error.message)));
    }
}

