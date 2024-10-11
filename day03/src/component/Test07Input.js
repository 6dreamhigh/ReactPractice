import React from 'react';

const Test07Input = ({name, age, addr, phone, onInput, onNext}) => {
  return (
    <div>
      <p>
        <label>이름</label>
        <input type='text' name='name' value={name} onChange={onInput}/>
        <br/><br/>
        <label>나이</label>
        <input type='text' name='age' value={age} onChange={onInput}/>
        <br/><br/>
        <label>주소</label>
        <input type='text' name='addr' value={addr} onChange={onInput} />
        <br/><br/>
        <label>핸드폰</label>
        <input type='text' name='phone' value={phone} onChange={onInput} />
        <br/><br/>
        <button onClick={onNext}>다음</button>
      </p>
    </div>
  );
};

export default Test07Input;