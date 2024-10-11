import React from 'react';

const Display = (props) => {
  return (
    <div>
      <h2>Display Component</h2>
      <h1>I like {props.name}</h1>
    </div>
  );
};

export default Display;