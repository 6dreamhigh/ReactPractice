import React, { useState } from 'react';
import Test07Input from './Test07Input';
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';

const Test07Main = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    addr: '',
    phone: ''
  });

  const {name, age, addr, phone} = data

  const onInput = (e) =>{
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  const [count, setCount] = useState(1);

  const onPrev = () =>{
    setCount(count-1);
  }

  const onNext = () =>{
    setCount(count+1);
  }
  return (
    <div className='wrap'>
      {
        count ===1 && <Test07Input name={name} age={age} phone={phone} onInput={onInput} onNext={onNext}/>
      }

      {
        count ===2 && <Test07Print name={name} age={age} addr={addr} phone={phone} onInput={onInput} onNext={onNext} onPrev={onPrev}/>
      }

      {
        count ===3 && <Test07Output name={name} age={age} addr={addr} phone={phone} onInput={onInput}/>
      }
      
    </div>
  );
};

export default Test07Main;