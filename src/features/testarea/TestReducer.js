import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants";

const initialState = {
  data: 43
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 222 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 333 };
    default:
      return state;
  }
};

export default testReducer;
