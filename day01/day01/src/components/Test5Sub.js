import React from 'react';

const Test5Sub = ({name, age, addr, tel,color,bgcolor, done}) => {
  return (
    <div>
      <h2>신상명세서</h2>
      <ul style={{color: color, backgroundColor: bgcolor}}>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
        <li>핸드폰 : {tel}</li>
        <li>주소 : {addr}</li>
        <li>동의 여부 : {done ? '동의' : '비동의'}</li>
      </ul>
    </div>
  );
};

//기본값 설정
Test5Sub.defaultProps = {
  name: '이름없음',
  age: '나이 없음',
  addr: '주소 없음',
  tel:'전화번호 없음',
  color:'blue',
  bgcolor:'white',
  done: false
}

export default Test5Sub;


// 두번째 방법
// import React from 'react';

// const Test5Sub = ({
//   name = '이름 없음',
//   age = '나이 없음',
//   addr = '주소 없음',
//   tel = '전화번호 없음',
//   color = 'black',
//   bgcolor = 'white',
//   done = false,
// }) => {
//   return (
//     <div>
//       <h2>신상명세서</h2>
//       <ul style={{ color: color, backgroundColor: bgcolor }}>
//         <li>이름 : {name}</li>
//         <li>나이 : {age}</li>
//         <li>핸드폰 : {tel}</li>
//         <li>주소 : {addr}</li>
//         <li>동의 여부 : {done ? '동의' : '비동의'}</li>
//       </ul>
//     </div>
//   );
// };

// export default Test5Sub;



/*
방법 1: defaultProps를 사용하면 컴포넌트 외부에서 기본값을 설정합니다. 이 방법은 코드의 가독성을 높여줄 수 있습니다.
방법 2: 구조 분해 할당에서 기본값을 설정하면, 컴포넌트의 인자로 직접 기본값을 정의할 수 있습니다. 
이 방법은 더 간결하게 사용할 수 있습니다.
*/