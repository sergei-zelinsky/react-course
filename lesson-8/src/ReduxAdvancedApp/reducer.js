import {combineReducers} from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
};

const INITIAL_NUMBERS = [9, 5, 4, 3, 0, -1, 5];

// @note: impure function (random)
const numbersReducer = (state = INITIAL_NUMBERS, action) => {
  switch (action.type) {
    case 'ADD_RANDOM_NUMBER':
      return [...state, Math.round(Math.random() * 100)];
    default:
      return state;
  }
};

export default combineReducers({
  counter: counterReducer,
  numbers: numbersReducer,
});
