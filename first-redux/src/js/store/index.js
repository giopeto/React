// src/js/store/index.js

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

store.subscribe(() => console.log('Look ma, Redux!!'));
store.subscribe(() => console.log('Look ma, Redux!! second'));
export default store;