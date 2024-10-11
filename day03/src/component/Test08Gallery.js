import React, { useState } from 'react';
import dataList from './Test08Data';
import Test08View from './Test08View';

const Test08Gallery = () => {
  const [data, setData] = useState(dataList);
  const [one, setOne] = useState(data[0]);

  const onView = (id) => {
    setOne(data[id-1]);
    //id와 배열번호 차이 조정
  }
  return (
    <div className='wrap2'>
      <Test08View one ={one} data={data} onView={onView}/>
      
    </div>
  );
};

export default Test08Gallery;