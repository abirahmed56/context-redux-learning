import cartReducer from "./cartReducer";
import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    cartReducer,
});
 export default rootReducer;