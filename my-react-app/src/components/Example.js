import React from 'react';

// Removed unnecessary comments and fixed syntax for an arrow function
export const apikey = "akjdlkfljls";

const userMessage = "Hello World";
console.log(userMessage);

const userMessage1 = "Hello";
// const variables cannot be reassigned, so this line would cause an error if uncommented
// userMessage1 = "sjsjsj";
console.log(userMessage1);

console.log(10 === 20); // Outputs 'false' as a comparison between numbers

function greet() {
  console.log("Hello!");
}

// Corrected syntax for the arrow function; it's not being called, so it won't output anything
const sayHello = () => {
  console.log("hello!");
};

const user = {
  name: 'Max',
  age: 34,
  greet2() {
    console.log('Hello!ssss');
  }
};

console.log(user.name);
greet(); // Calling the greet function


class User {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet3() {
    console.log("Hiii");
  }
}
const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet3();


const Example = () => {
  return (
    <div>
      <p>{userMessage}</p>
      <p>{user.name} is {user.age} years old.</p>
    </div>
  );
};

export default Example;
