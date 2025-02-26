console.log(number); // undefined

// 变量声明（var number）被提升了，变量的初始化（= 10）却没有被提升。
//所以在 number 声明之前访问它，得到的是 var 定义的变量的默认初始值，即 undefined。
var number = 10;
console.log(number); // 10

// console.log(number2); // ReferenceError: Cannot access 'number2' before initialization

// let number2;

// console.log(number3); //
// ///ReferenceError: Cannot access 'number3' before initialization
// let number3 = 10;

// const number4; 和 number3 语法的报错差别是 前一个是说“无法在初始化之前访问”，后一个是说“未定义”。
console.log(number4); // ReferenceError: number4 is not defined

// 由 let 或 const 定义的变量提升时不会默认初始化，所以在声明之前访问会报错：ReferenceError: Cannot access 'variable' before initialization
//  var 定义的变量提升时会被初始化为默认值 undefined，所以在声明之前访问会得到 undefined。
// let/const 定义的变量被提升却无法正常访问，是因为存在暂时性死区

// 以为只有 var 定义的变量会提升而 let/const 定义的变量不是

// ，let 和 const 定义的变量是会提升的，只是它们提升的时候不会进行默认初始化，使得它们无法被访问（因为这些变量在暂时性死区里）。
