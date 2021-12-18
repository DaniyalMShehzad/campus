import { createStore, applyMiddleware } from "redux";
import loginreducer from "./reducers/loginreducer";
import signupreducer from "./reducers/signupreducer"
import studentdata from "./reducers/studentdata"
import uiddata from "./reducers/uiddata"
import uiddata2reducer2 from "./reducers/uiddata2reducer2"
import studentsdata2reducer from "./reducers/studentsdata2reducer"
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
    loginreducer,
    signupreducer,
    studentdata,
    uiddata,
    uiddata2reducer2,
    studentsdata2reducer
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;