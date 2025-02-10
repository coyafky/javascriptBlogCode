function createPerson(name, age, sex) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  obj.greet = function () {
    console.log("Hello");
    console.log("My name is " + this.name);
  };
  return obj;
}
let person1 = createPerson("John", 30, "male");
let person2 = createPerson("Jane", 25, "female");
let person3 = createPerson("Jack", 35, "male");
console.log(person1);
console.log(person2);
console.log(person3);
person1.greet();
person2.greet();
person3.greet();
