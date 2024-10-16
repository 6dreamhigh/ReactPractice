import React from 'react';

const Test1 = () => {
  let title = '신상명세서';
  const name = '홍길동';
  const age = 25;
  const addr = '서울';

  const css1 = {
    color:'dodgerblue',
    backgroundColor: 'ghostwhite',
    fontSize:'10px',
    padding:20,
    margin:10,
    border: '2px solid #666666'
  };

  const css2 = {
    width:'400px',
    backgroundColor:'salmon',
    fontSize:'20px',
    padding:13,
    margin:30
  }

  return (
    <>
      {/* div를 생략할 수 있지만 <>를 생략할 수 없음 
      , <div>를 생략할 경우 - 개발자 도구에서 나타나지 않음

      */}
      <h2 style ={css2}>JSX 영역</h2>
      <h2 style ={css1}>{title}</h2>
      <ul>
        <li>이름 : {name}</li>
        <li style = {{backgroundColor: 'greenyellow', padding:15, margin: 'auto'}}>
            나이: {age} {age>=19 ? '성인': '청소년'}
        </li>
        <li>주소: {addr}</li>
      </ul>
    </>
  );
};

export default Test1;