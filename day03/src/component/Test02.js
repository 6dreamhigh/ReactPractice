import React, { useState } from 'react';

const Test02 = () => {
  const [check, setCheck] = useState(true);

  const onCheck = (e) =>{
    const {checked} = e.target;
    //e.target.checked 값에서 checked라는 변수를 선언하고, 그 값을 가져옴 
    //나중에는 checked 변수를 사용할 때, e.target.checked 대신에 checked 변수를 사용할 수 있음
    setCheck(checked);
  }
  return (
    <div style={{color: check ? 'dodgerblue' : 'tomato', fontSize:25, margin:30}}>
      <label>
        <input type='checkbox' checked={check} onChange={onCheck}/>Have a nice day
      </label>
      
    </div>
  );
};

export default Test02;