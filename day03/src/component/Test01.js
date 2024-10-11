import React , {useState, useRef} from 'react';

const Test01 = () => {
  const [id, setId] = useState('');//빈값 또는 '' 사용 가능
  const [pwd, setPwd] = useState('');
  //입력을 안할 경우, null로 인식 > null.length 사용 x 

  const idRef = useRef();

  const onChangeId = (event) =>{
    const {value} = event.target; //이벤트가 발생한 대상
    //비구조할당 : input tag 안에 있는 모든 속성들(type, value, onChange) 중에서 value 값만 가져옴
    setId(value);
  };
  const onChangePwd = (event) =>{
    const{value} = event.target;
    setPwd(value);
  };

  const onReset = () =>{
    setId('');
    setPwd('');
    idRef.current.focus();//idRef가 호출된 태그에 포커스 
  };
  return (
    <div>
      아이디: <input type="text" value={id} onChange={onChangeId} ref={idRef}/>
      <br/>
      비밀번호: <input type='password' value={pwd} onChange={onChangePwd}/>
      <br/>
      <button disabled = {pwd.length < 6}>로그인</button>&emsp;
      <button onClick={onReset}>초기화</button>
    </div>
  );
};

export default Test01;