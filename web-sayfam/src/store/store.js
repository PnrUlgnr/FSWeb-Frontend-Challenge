// store.js
import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { themeReducer } from "./reducers/themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = createStore(rootReducer);
