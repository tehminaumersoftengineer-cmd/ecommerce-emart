import {createStore} from "redux";
import rootReducer from "./main";

const store = createStore(rootReducer)

export default store;