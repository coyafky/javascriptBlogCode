//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName(); // calling function by its name and with parentheses

function square(num) {
  return num * num;
}

// function without parameter
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers(); // a function has to be called by its name to be executed

function PrintFullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

PrintFullName("John", "Doe");

function areaOfCircle(radius) {
  let area = Math.PI * radius * radius;
  return area;
}

console.log(areaOfCircle(10));

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log(sum);
}
sumTwoNumbers(10, 20);

// // function with multiple parameters
// function functionName(parm1, parm2, parm3,...){
//     //code goes here
//   }
//   functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));


​
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


function sumAllNums2(...args) {
  let sum = 0
  for (let i = 0; i < args.length; i++) {
    sum += args[i]
  }
  return sum
}

console.log(sumAllNums2(1, 2, 3, 4)) // 10
console.log(sumAllNums2(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40))  // 173


// Function expression
const square1 = function(n) {
    return n * n
  }
  
  console.log(square1(2)) // -> 4
  console.log(square1(3)) // -> 9


// Arrow function
const square2 = (n) => {
    return n * n
  }

  console.log(square2(2)) // -> 4
  console.log(square2(3)) // -> 9


const  changeToUpperCase = arr => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toUpperCase()
    }
    return newArr
  }

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries)) // ['FINLAND', 'SWEDEN', 'NORWAY', 'DENMARK', 'ICELAND']

const printFullName = (firstName, lastName) => {
    console.log(firstName + ' ' + lastName);
}

printFullName('John', 'Doe')


// // syntax
// // Declaring a function
// function functionName(param = value) {
//     //codes
//   }
  
//   // Calling function
//   functionName()
//   functionName(arg)

function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))

  function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))


//   // syntax
// // Declaring a function
// const functionName = (param = value) => {
//     //codes
//   }
  
//   // Calling function
//   functionName()
//   functionName(arg)

const greetings2 = (name = 'Peter') => {
    let message = `${name}, welcome to 30 Days Of JavaScript`
    return message
  }

  console.log(greetings2())
  console.log(greetings2('Asabeneh'))

  