import { createStore, applyMiddleware } from "redux";
import loginreducer from "./reducers/loginreducer";
import signupreducer from "./reducers/signupreducer"
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
    loginreducer,
    signupreducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;