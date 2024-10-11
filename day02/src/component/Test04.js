import React, { useState } from 'react';

const Test04 = () => {
  const [visible, setVisible] = useState(true);

  const onShow = () => {
    setVisible(true);
  }
  const onHide = () =>{
    setVisible(false);
  }

  const onToggle = () =>{
    setVisible(!visible); //현재값과 반대값으로 설정
    //visible ? setVisible(false) : setVisible(true);
  }
  return (
    <div>
      <button onClick={onShow}>보이기</button>
      <button onClick={onHide}>숨기기</button>
      <button onClick={onToggle}>{visible ? '숨기기':'보이기'}</button>

      <hr/>
      {
        visible && <div style={{width:300, height:300, margin:20, background:'tomato'}}></div>
      }
    </div>
  );
};

export default Test04;