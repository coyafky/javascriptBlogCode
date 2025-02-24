/**
 * 获取对象的函数属性名称数组
 * 
 * @param {Object} obj - 要检查的对象
 * @param {boolean} [inherited=false] - 是否包含继承的属性
 * @returns {Array} - 函数属性名称数组
 */
function getFunctionPropertyNames(obj, inherited = false) {
    // 如果输入不是对象，返回空数组
    if (typeof obj !== 'object' || obj === null) {
      return [];
    }
  
    // 使用 Object.keys 获取自身可枚举属性（不包含继承的属性）
    let props = Object.keys(obj);
  
    // 如果需要包含继承的属性，使用 for...in 循环
    if (inherited) {
      props = [];
      for (let key in obj) {
        props.push(key);
      }
    }
  
    // 过滤出函数类型的属性
    return props.filter(key => typeof obj[key] === 'function');
  }
  
  // 测试函数
  function testGetFunctionPropertyNames() {
    // 创建一个基础对象
    const baseObj = {
      baseProp: 'base',
      baseMethod: function() {}
    };
  
    // 创建一个继承自 baseObj 的对象
    const childObj = Object.create(baseObj);
    childObj.childProp = 'child';
    childObj.childMethod = function() {};
    childObj.anotherChildMethod = () => {};
  
    console.log("测试用例 1: 只获取自身的函数属性");
    console.log(getFunctionPropertyNames(childObj));
    // 预期输出: ['childMethod', 'anotherChildMethod']
  
    console.log("\n测试用例 2: 获取自身和继承的函数属性");
    console.log(getFunctionPropertyNames(childObj, true));
    // 预期输出: ['childMethod', 'anotherChildMethod', 'baseMethod']
  
    console.log("\n测试用例 3: 包含非函数属性的对象");
    const mixedObj = {
      prop1: 'string',
      prop2: 42,
      method1: function() {},
      prop3: true,
      method2: () => {}
    };
    console.log(getFunctionPropertyNames(mixedObj));
    // 预期输出: ['method1', 'method2']
  
    console.log("\n测试用例 4: 空对象");
    console.log(getFunctionPropertyNames({}));
    // 预期输出: []
  
    console.log("\n测试用例 5: 数组对象");
    const arr = [1, 2, 3];
    arr.customMethod = function() {};
    console.log(getFunctionPropertyNames(arr));
    // 预期输出: ['customMethod']
  
    console.log("\n测试用例 6: 非对象输入");
    console.log(getFunctionPropertyNames("not an object"));
    // 预期输出: []
  
    console.log("\n测试用例 7: null 输入");
    console.log(getFunctionPropertyNames(null));
    // 预期输出: []
  }
  
  // 运行测试
  testGetFunctionPropertyNames();
  