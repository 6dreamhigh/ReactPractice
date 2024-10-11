import React, { useRef, useState } from 'react';

const Test06 = () => {
  const nameRef = useRef();// ref : 값의 변화가 없는 상수의 개념

  const [data, setData] = useState({// data: 상태변수 3개의 상태변수의 집합
    name: '',
    id: '',
    pwd: ''
  });

  const {name, id, pwd} = data;//비구조 할당
  
  const onInput = (e) =>{
    const {name, value} = e.target;
    //이벤트가 발생한 input 태그가 여러개이므로 호출한 input tag를 찾기 위해 name도 추가로 받아옴
    setData({
      ...data, 
      [name]: value
      //수정한 상태값을 setData 함수를 사용하여 업데이트 
    });
  }

  const onReset = () => {
    setData({
      name: '',
      id: '',
      pwd: ''
    });

    nameRef.current.focus();
  }
  return (
    <div>
      <table border='1' cellPadding='5' cellSpacing='0'>
        <tr>
          <th width='100'>NAME</th>
          <td>
            <input type='text' name='name' value={name} onChange={onInput} ref={nameRef}/>

          </td>
        </tr>
        <tr>
          <th width='100'>ID</th>
          <td>
            <input type='text' name='id' value={id} onChange={onInput}/>
          </td>
        </tr>
        <tr>
          <th width='100'>PWD</th>
          <td>
            <input type='password' name='pwd' value={pwd} onChange={onInput}/>
          </td>
        </tr>
        <tr>
          <td colSpan ='2' align='center'>
            <button onClick={onReset}>초기화</button>
          </td>
        </tr>
      </table>

      <h3>Name : {name}</h3>
      <h3>ID : {id}</h3>
      <h3>PWD : {pwd}</h3>
    </div>
  );
};

export default Test06;