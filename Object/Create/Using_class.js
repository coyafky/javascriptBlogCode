class person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  greet() {
    console.log("Hello");
    console.log("My name is " + this.name);
  }
}

let person1 = new person("John", 30, "New York");
let person2 = new person("Jane", 25, "Los Angeles");
let person3 = new person("Jack", 35, "Chicago");
console.log(person1);
console.log(person2);
console.log(person3);
person1.greet();
person2.greet();
