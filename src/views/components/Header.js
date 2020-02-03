import React from 'react';

export default props => {
  return (
    <h1>
      {props.children + ' '}
      <span role="img" aria-label="wave-emoji">
        👋
      </span>
    </h1>
  );
};
