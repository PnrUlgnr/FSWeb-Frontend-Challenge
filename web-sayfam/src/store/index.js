// reducers/index.js
import { combineReducers } from "redux";
import darkModeReducer from "./darkModeReducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  // Diğer reducer'ları buraya ekleyin
});

export default rootReducer;
