import { combineReducers } from "redux";
import { cartReducer } from "./reducer";

let rootReducer = combineReducers({
    cartReducer,
})

export default rootReducer;