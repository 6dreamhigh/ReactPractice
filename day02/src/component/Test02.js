import React from 'react';

const Test02 = () => {

  const title='신상명세서';
  const arr = ['홍길동','코난','둘리','라이언','네오'];
  const data = [
    {id:1, name:'홍길동'},
    {id:2, name:'코난'},
    {id:3, name:'라이언'},
    {id:4, name:'네오'}
  ]
  return (
    <div>
      <h2>{title}</h2>
      <ul style={{border:'2px solid #666666'}}>
        {
          arr.map((item, index) => {
            return(<li key={index}>{index} : {item}</li>)
          })
        }
      </ul>
      <hr/>
      <ul style={{border:'2px solid dodgerblue'}}>
        
        {
          data.map(item => {
            return (<li>{item.id} : {item.name}</li>)
          })
        }
      </ul>
    </div>
  );
};

export default Test02;