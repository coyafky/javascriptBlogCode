/**
 * 将对象转换为键值对数组
 *
 * @param {Object} obj - 要转换的对象
 * @returns {Array} - 键值对数组
 */
function objectToKeyValuePairs(obj) {
  // 检查输入是否为有效对象
  if (typeof obj !== "object" || obj === null) {
    return "Invalid input: not an object";
  }

  // 使用 Object.entries() 方法将对象转换为键值对数组
  return Object.entries(obj);
}

// 测试函数
function testObjectToKeyValuePairs() {
  console.log("测试用例 1: 基本对象");
  const basicObj = { name: "John", age: 30, city: "New York" };
  console.log(objectToKeyValuePairs(basicObj));

  console.log("\n测试用例 2: 包含不同类型值的对象");
  const mixedObj = {
    string: "Hello",
    number: 42,
    boolean: true,
    array: [1, 2, 3],
    nestedObj: { x: 1, y: 2 },
  };
  console.log(objectToKeyValuePairs(mixedObj));

  console.log("\n测试用例 3: 空对象");
  console.log(objectToKeyValuePairs({}));

  console.log("\n测试用例 4: 包含 Symbol 键的对象");
  const symbolKey = Symbol("key");
  const objWithSymbol = {
    [symbolKey]: "Symbol value",
    regularKey: "Regular value",
  };
  console.log(objectToKeyValuePairs(objWithSymbol));

  console.log("\n测试用例 5: 无效输入 - 非对象");
  console.log(objectToKeyValuePairs("Not an object"));

  console.log("\n测试用例 6: 无效输入 - null");
  console.log(objectToKeyValuePairs(null));

  console.log("\n测试用例 7: 无效输入 - undefined");
  console.log(objectToKeyValuePairs(undefined));

  console.log("\n测试用例 8: 包含原型链属性的对象");
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    return "Hello!";
  };
  const person = new Person("Alice");
  console.log(objectToKeyValuePairs(person));
}

// 运行测试
testObjectToKeyValuePairs();
