import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions';
import './index.css';

const Counter = ({value, increment, decrement}) => {
  console.log('RENDER: Counter');

  return (
    <div>
      <h1># Counter</h1>
      <h2>Counter value: {value}</h2>
      <button className="action-button" onClick={increment}>
        Increment
      </button>
      <button className="action-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.counter,
});

const ConnectedCounter = connect(mapStateToProps, {
  increment: Actions.increment,
  decrement: Actions.decrement,
})(Counter);

export default ConnectedCounter;
