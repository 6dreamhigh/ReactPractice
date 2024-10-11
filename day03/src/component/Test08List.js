import React from 'react';

const Test08List = ({data, onView}) => {
  return (
    <ul className='list'>
      {
        data.map(item => <Test08Item key={item.id} item = {item} onView={onView}/>)
      }
    </ul>
  );
};

export default Test08List;