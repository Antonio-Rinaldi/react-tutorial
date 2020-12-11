import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./user/userReducer";
import {counterReducer} from "./counter/counterReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer
})

const middleware = composeWithDevTools(applyMiddleware(logger, thunk));
export const store = createStore(rootReducer, middleware);
