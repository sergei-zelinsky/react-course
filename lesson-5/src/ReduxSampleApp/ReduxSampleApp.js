import React from 'react';
import './index.css';

const ReduxSampleApp = ({value, increment, decrement, incrementBy}) => {
  return (
    <div>
      <h2>Counter value: {value}</h2>
      <button className="action-button">Increment</button>
      <button className="action-button">Decrement</button>

      <button className="action-button">Increment By 2</button>
    </div>
  );
};

export default ReduxSampleApp;
