var myObject = { a: 2, b: { c: true } };
var shallowCopy = Object.assign({}, myObject);

console.log(shallowCopy.a); // 2
console.log(shallowCopy.b === myObject.b); // true

// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

// Assign Source to Target
Object.assign(person1, person2);

console.log(person1); //{ firstName: 'Anne', lastName: 'Smith', age: 50, eyeColor: 'blue' }

//如果源对象和目标对象有同名属性，则源对象的属性会覆盖目标对象的属性。

const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };
const merged = Object.assign(target, source1, source2);
// Object.assign() 执行的是浅拷贝。 这意味着它只复制对象的属性值
console.log(target); // { a: 1, b: 3, c: 5, d: 6 }
console.log(merged); // { a: 1, b: 3, c: 5, d: 6 } merged 和target指向的同一和对象
