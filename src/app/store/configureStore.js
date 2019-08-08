import { createStore } from "redux";
import testReducer from "../../features/testarea/TestReducer";

export const configureStore = () => {
    const store = createStore(testReducer);

    return store;
}