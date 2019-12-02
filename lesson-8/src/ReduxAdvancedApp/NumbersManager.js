import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions';
import {createSelector} from 'reselect';

const numberSelectors = createSelector(
  [state => state.numbers, (state, ownProps) => ownProps.filter],
  (numbers, currentFilter) =>
    numbers.filter(item =>
      currentFilter === 'all'
        ? true
        : currentFilter === 'odd'
        ? item % 2 === 1
        : item % 2 === 0
    )
);

const NumbersList = connect((state, ownProps) => ({
  numbers: numberSelectors(state, ownProps),
}))(({numbers}) => {
  console.log('RENDER: NumbersList');

  return (
    <ul>
      {numbers.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
});

const NumbersManager = connect(null, {
  addRandomNumber: Actions.addRandomNumber,
  addRandomNumberAsync: Actions.addRandomNumberAsync,
})(({addRandomNumber, addRandomNumberAsync}) => {
  const [filter, setFilter] = useState('all');

  console.log('RENDER: NumbersManager');

  return (
    <div>
      <h1>Numbers</h1>
      <button
        className="action-button"
        disabled={filter === 'all'}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className="action-button"
        disabled={filter === 'odd'}
        onClick={() => setFilter('odd')}
      >
        Odd
      </button>
      <button
        className="action-button"
        disabled={filter === 'even'}
        onClick={() => setFilter('even')}
      >
        Even
      </button>
      <div>
        <button className="action-button" onClick={addRandomNumber}>
          Add random number
        </button>
        <button className="action-button" onClick={addRandomNumberAsync}>
          Add random number (Async)
        </button>
      </div>

      <NumbersList filter={filter} />
    </div>
  );
});

export default NumbersManager;
