/**
 * 根据指定的属性和顺序对对象数组进行排序
 *
 * @param {Array} arr - 要排序的对象数组
 * @param {Array} props - 排序属性数组
 * @param {Array} orders - 排序顺序数组（可选，默认为全部升序）
 * @returns {Array} - 排序后的数组
 */
function sortArrayOfObjects(arr, props, orders = []) {
  // 检查输入是否有效
  if (!Array.isArray(arr) || !Array.isArray(props)) {
    return "Invalid input: arr and props must be arrays";
  }

  // 创建排序顺序数组，如果未提供则默认为升序
  const sortOrders = props.map((_, index) =>
    orders[index] === "desc" ? -1 : 1
  );

  // 使用 sort 方法对数组进行排序
  return arr.sort((a, b) => {
    // 遍历所有排序属性
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      const order = sortOrders[i];

      // 如果当前属性的值不同，则根据该属性进行排序
      if (a[prop] < b[prop]) return -1 * order;
      if (a[prop] > b[prop]) return 1 * order;
    }
    // 如果所有属性都相等，则保持原有顺序
    return 0;
  });
}

// 测试函数
function testSortArrayOfObjects() {
  // 测试数据：一组人员信息
  const people = [
    { name: "Alice", age: 30, height: 165 },
    { name: "Bob", age: 25, height: 180 },
    { name: "Charlie", age: 35, height: 175 },
    { name: "David", age: 30, height: 170 },
    { name: "Eve", age: 25, height: 160 },
  ];

  console.log("原始数组:");
  console.log(people);

  console.log("\n测试用例 1: 按年龄升序排序");
  console.log(sortArrayOfObjects(people, ["age"]));

  console.log("\n测试用例 2: 按年龄降序排序");
  console.log(sortArrayOfObjects(people, ["age"], ["desc"]));

  console.log("\n测试用例 3: 先按年龄升序，再按身高降序排序");
  console.log(sortArrayOfObjects(people, ["age", "height"], ["asc", "desc"]));

  console.log("\n测试用例 4: 按姓名字母顺序排序");
  console.log(sortArrayOfObjects(people, ["name"]));

  console.log("\n测试用例 5: 先按年龄升序，再按姓名升序排序");
  console.log(sortArrayOfObjects(people, ["age", "name"]));

  // 测试错误处理
  console.log("\n测试用例 6: 无效输入 - 非数组");
  console.log(sortArrayOfObjects("not an array", ["age"]));

  // 测试空数组
  console.log("\n测试用例 7: 空数组");
  console.log(sortArrayOfObjects([], ["age"]));
}

// 运行测试
testSortArrayOfObjects();
