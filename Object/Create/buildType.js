var person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";
person.greet = function () {
  console.log("Hello");
  console.log("My name is " + this.name);
};

console.log(person);
person.greet();

var user = new Object();
user.id = 1;
user.name = "John";
if (user.id === 1) {
  console.log("User is Admin");
} else {
  console.log("User is not Admin");
}
user.login = function () {
  console.log("User is logged in");
};
user.logout = function () {
  console.log("User is logged out");
};
