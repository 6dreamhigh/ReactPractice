import React from 'react';

const hobbies = ["Sports","Cooking","Reading"];
console.log(hobbies[0]);
hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => 
  item === 'Sports'
);

const editedHobbies = hobbies.map((item) => item +"!");
console.log(editedHobbies);

console.log(index);

const numberArray = [1,2,3];
function transformToObjects(numberArray){
  return numberArray.map(number => ({val: number}));
}

console.log(transformToObjects(numberArray));



const [firstName, lastName] = ["Max"," Schwarzmuller"];
console.log(firstName);
console.log(lastName);

const {name: userName, age} = {
  name:"Max",
  age: 34
}

console.log(userName);
console.log(age);

const userNameData = ["Max","Sch"];
const TOC = () => {
  return (
    <div>
      <ul>
        {hobbies.map((hobby,i) => (
          <li key = {i}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default TOC;