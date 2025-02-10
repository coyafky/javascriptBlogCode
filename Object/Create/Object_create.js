const prototype = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function () {
    console.log("Hello");
    console.log("My name is " + this.name);
  },
};

const person = Object.create(prototype);
person.name = "Jane";
person.greet();
