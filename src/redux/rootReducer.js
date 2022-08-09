import { combineReducers } from "redux";
import counterReducer from "./Collector/counter.reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export default rootReducer;