import React, { useState } from 'react';
import CatList from './CatList';
import dataList from './CatData';
import '../css/reset.css';
import '../css/style.css';

const Cat = () => {
  const[data, setData] = useState(dataList)
  return (
    <>
    <section className='business'>
      <div className='inner'>
        <h2>고양이</h2>
        <p>고양이들</p>
        <CatList data = {data}/>
      </div>
    </section>
      
    </>
  );
};

export default Cat;