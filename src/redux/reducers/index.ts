import { combineReducers } from "redux";
import jobsReducer from "./jobs.reducer";

const rootReducer = combineReducers({
    jobs: jobsReducer,
})

export default rootReducer;