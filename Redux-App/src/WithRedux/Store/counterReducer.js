import {increment , decrement} from './Action'

const intialState = {
  counter: 0,
};

export default function counterReducer(state = intialState, action) {
  switch (action.type) {
    case increment:
      return { ...state, counter: state.counter + 1 };
    case decrement:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
