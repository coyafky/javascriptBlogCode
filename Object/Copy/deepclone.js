var myObject = { a: 2, b: { c: true } };
var deepCopy = JSON.parse(JSON.stringify(myObject));

console.log(deepCopy.a); // 2
console.log(deepCopy.b === myObject.b); // false

// 自定义对象的比较

function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
  const obj6 = {
    a: 1,
    b: 2,
  };
  
  const obj7 = {
    a: 1,
    b: 2,
  };
  console.log(compareObjects(obj6, obj7)); //true
  


const _ = require('lodash');

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(_.isEqual(obj1, obj2)); // Outputs: true (deep comparison)
console.log(_.isEqual(obj1, obj3)); // Outputs: false