import React from 'react';
import {apikey} from "./components/Example";

console.log(apikey);

const hobbies = ["Sports","Cooking"];
const user = {
  name: "Max",
  age: 34
};

const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies,...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
  isAdmin: true,
  ...user
};
console.log(extendedUser);

const password = prompt("Your password");

if(password === "Hello"){
  console.log("Hellp works");
}else if(password === "hello"){
  console.log("hello works");
}else {
  console.log("Access not granted");
}

const hobbies2 = ["Sports","Cooking"];

for(const hobby of hobbies2){
  console.log(hobby);
}

function handleTimeout(){
  console.log("Timed out!!");
}

const handleTimeout2 = () => {
  console.log("Timed out ... again");
};

setTimeout(handleTimeout, 2000);

function greeter(greetFn){
  greetFn();
}
greeter(()=> console.log("Hi"));


//함수 안에 함수 호출
function init() {
  function greet(){
    console.log("Hi");
  }
  greet();
}
init();

//string은 concat과 같이 값이 바뀔 때 항상 새 스트링이 생성된다. 

//배열의 경우 값이 수정될때마다 새로 생성되지 않고 기존의 배열이 변경된다.
//const는 변수를 덮어쓸 수 없다는 뜻이다.
//상수에는 주소가 저장되며, 주소는 변경되지 않으므로 상수로 선언된 배열은 조작할 수 있다.
const printName = (personObj) => {
  console.log(personObj.name);
}
printName({name: 'Max', age: 28});
const Subject = (props) => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
        {props.sub}
      </header>
      
    </div>
  );
};

// const Subject2 = () => {
//   return (
//     <div className="App">
//       <Subject title="WEB" sub="WORLD WIDE WEB!"/>
        
//     </div>
//   );
// }

export default Subject;