// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/spreadCopyDemo.js

// 1. 复制数组
function demonstrateArrayCopy() {
  let arr = [1, 2, 3];

  // 使用 Spread 语法复制数组
  let arrCopy = [...arr];

  console.log("原始数组:", arr);
  console.log("复制的数组:", arrCopy);
  console.log("内容相同?", JSON.stringify(arr) === JSON.stringify(arrCopy));
  console.log("引用相同?", arr === arrCopy);

  // 修改原始数组
  arr.push(4);
  console.log("修改后的原始数组:", arr);
  console.log("复制的数组保持不变:", arrCopy);

  // 使用 Object.assign() 复制数组
  let arrCopy2 = Object.assign([], arr);
  console.log("使用 Object.assign() 复制:", arrCopy2);
}

console.log("1. 复制数组:");
demonstrateArrayCopy();

console.log("\n------------------------\n");

// 2. 复制对象
function demonstrateObjectCopy() {
  let obj = { a: 1, b: 2, c: 3 };

  // 使用 Spread 语法复制对象
  let objCopy = { ...obj };

  console.log("原始对象:", obj);
  console.log("复制的对象:", objCopy);
  console.log("内容相同?", JSON.stringify(obj) === JSON.stringify(objCopy));
  console.log("引用相同?", obj === objCopy);

  // 修改原始对象
  obj.d = 4;
  console.log("修改后的原始对象:", obj);
  console.log("复制的对象保持不变:", objCopy);

  // 使用 Object.assign() 复制对象
  let objCopy2 = Object.assign({}, obj);
  console.log("使用 Object.assign() 复制:", objCopy2);
}

console.log("2. 复制对象:");
demonstrateObjectCopy();

console.log("\n------------------------\n");

// 3. 浅拷贝的局限性
function demonstrateShallowCopyLimitation() {
  let complexObj = {
    a: 1,
    b: { c: 2 },
  };

  let complexObjCopy = { ...complexObj };

  console.log("原始复杂对象:", complexObj);
  console.log("复制的复杂对象:", complexObjCopy);

  // 修改嵌套对象
  complexObj.b.c = 3;
  console.log("修改后的原始复杂对象:", complexObj);
  console.log("复制的复杂对象也被修改:", complexObjCopy);
}

console.log("3. 浅拷贝的局限性:");
demonstrateShallowCopyLimitation();
