import React from 'react';

const Test01 = () => {
  const test1 = () =>{
    alert('test1');
  }

  const test2 = () =>{
    alert('test2');
  }

  const test3 = (num) =>{
    alert('num: '+ num);
  }
  const test4 = (num) =>{
    alert(`num: ${num}`);
  }
  return (
    <div>
      <h2>이벤트 :  on +첫글자 대문자</h2>
      <p>
        <button onClick={test1}>Click</button>
        <button onClick={test2}>Click</button>
        <button onClick={()=>test3(10)}>Click</button>
        <button onClick={()=>test4(20)}>Click</button>
      </p>

      <p>
        <button onClick={()=>{
          console.log('기린');
          console.log('사자');
          console.log('코끼리');
        }}>Click</button>
        <button onClick={() => console.log('빨간 사과')}>Click</button>
        <button onClick={()=> alert(1)}>경고</button>
      </p>
    </div>
  );
};

export default Test01;