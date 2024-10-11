import React, { useState } from 'react';

const Test03 = () => {
  const[name, setName] = useState('홍길동');
  const[age, setAge] = useState(25);
  const[color, setColor] = useState('dodgerblue');

  const onName = () => {
    setName('코난');
  }
  const onAge = (num) =>{
    setAge(num);
  }
  const onColor = () =>{
    setColor('ghostwhite');
  }
  return (
    <div>
      <h2 style={{background:color}}>
        이름: {name} / 나이: {age}
      </h2>
      <p>
        <button onClick={onName}>코난으로 이름 변경</button>
        <button onClick={() => onAge(30)}>나이를 30으로 변경</button>
        <button onClick={() => setAge(35)}>나이를 35로 변경</button>
        <button onClick={() => onColor()}>배경색을 흰색으로 변경</button>
      </p>
    </div>
  );
};

export default Test03;