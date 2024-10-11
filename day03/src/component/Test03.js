import React, { useState } from 'react';
import Test03Modal from './Test03Modal';
import '../css/Test03.css';

const Test03 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () =>{
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
  }
  /*

  */
  return (
    <div>
      <button className='button' onClick={onOpen}>팝업창</button>
      {
        isOpen && <Test03Modal onClose={onClose}/>
        //함수가 선언과 사용되는 곳이 다르므로 객체 선언 시, 변수처럼 함수도 전달
      }
    </div>
  );
};

export default Test03;