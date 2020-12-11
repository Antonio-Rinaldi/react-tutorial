import {FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./userActions";

export const initialUsersState = {
    users: [],
    error: undefined,
    isLoading: false
};

export function userReducer(state = initialUsersState, action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {...state, isLoading: true};
        case FETCH_USERS_SUCCESS:
            return {...state, isLoading: false, users: action.payload};
        case FETCH_USERS_ERROR:
            return {...state, isLoading: false, error: action.payload};
        default:
            return state;
    }
}
