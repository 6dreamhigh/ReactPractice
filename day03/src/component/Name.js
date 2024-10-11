import React from 'react';

const Name = ({name, onInputName}) => {
  return (
    <div>
      <h2>Name Component</h2>
      <label>Enter the Name
        <input type='text' value={name} onChange={onInputName}/>
      </label>
    </div>
  );
};

export default Name;