import React from 'react';
import {FormattedMessage} from 'react-intl';

const Welcome = ({name, tasksCount}) => (
  <h3>
    <FormattedMessage
      id="welcome"
      values={{
        name,
        tasksCount,
      }}
    />
  </h3>
);

export default Welcome;
