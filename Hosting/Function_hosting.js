greet();

function greet() {
  console.log("hello");
}

// greetExpression() //TypeError: greetExpression is not a function

var greetExpression = function () {
  console.log("hello");
};
greetExpression();
