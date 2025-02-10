//scope.js
let a = "JavaScript"; // is a global scope it will be found anywhere in this file
let b = 10; // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  if (true) {
    let a = "Python";
    let b = 100;
    console.log(a, b); // Python 100
  }
  console.log(a, b);
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accessible

//scope.js
let a1 = "JavaScript"; // is a global scope it will be found anywhere in this file
let b1 = 10; // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a1, b1); // JavaScript 10, accessible
  let value = false;
  // block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a1 = "Python";
    let b1 = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a1, b1, c, value); // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value); // JavaScript 10 true
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accessible
