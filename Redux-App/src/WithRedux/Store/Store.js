import { createStore } from "redux";
import createreducer from "./counterReducer";

const store = createStore(createreducer);

export default store;
