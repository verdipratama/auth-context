import React from 'react';
import spinner from './spinner.gif';

export default props => {
  const width = props.width || '10px';
  return (
    <div>
      <img src={spinner} alt={spinner} width={width} />
    </div>
  );
};
