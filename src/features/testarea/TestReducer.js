import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants";
import { createReducer } from "../../app/common/util/reducerUtil";

const initialState = {
  data: 43
};

const increamentCounter = (state) => {
    return { ...state, data: state.data + 1 };
}

const decrementCounter = (state) => {
    return { ...state, data: state.data - 1 };
}

export default createReducer(initialState, {
    [INCREMENT_COUNTER]: increamentCounter,
    [DECREMENT_COUNTER]: decrementCounter
});
