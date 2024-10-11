import React, { useState } from 'react';

const Test05 = () => {
  const [num, setNum] = useState(0);//초기값 설정

  const onAdd = () =>{
    setNum(num+1);
  }
  const onSub = () =>{
    setNum(num-1);
  }
  const onReset = () =>{
    setNum(0);
  }
  const handleClick= () =>{
    setNum(num +1)
  }
  return (
    <div>
      <h2>숫자 : {num}</h2>
      <p>
        <button onClick={onAdd}>증가</button>
        <button onClick={onSub}>감소</button>
        <button onClick={onReset}>초기화</button>
        <button onClick={handleClick}>1씩 증가</button>
      </p>
    </div>
  );
};

export default Test05;