import { combineReducers } from "redux";
import petReducer from "./PetReducer";

const rootReducer = combineReducers({
    pet: petReducer
})

export default rootReducer;
