/**
 * 将 CSV 字符串转换为二维对象数组
 *
 * @param {string} csvString - 输入的 CSV 字符串
 * @param {string} delimiter - 分隔符，默认为逗号
 * @returns {Array<Object>} - 转换后的对象数组
 */
function csvToArrayOfObjects(csvString, delimiter = ",") {
  // 检查输入是否为字符串
  if (typeof csvString !== "string") {
    return "Invalid input: not a string";
  }

  // 将 CSV 字符串按行分割
  const rows = csvString.trim().split("\n");

  // 如果 CSV 为空或只有一行（只有标题），返回空数组
  if (rows.length <= 1) {
    return [];
  }

  // 解析标题行
  const headers = rows[0].split(delimiter).map((header) => header.trim());

  // 解析数据行
  const result = rows.slice(1).map((row) => {
    const values = row.split(delimiter);
    return headers.reduce((obj, header, index) => {
      // 使用正则表达式移除引号并处理转义的引号
      obj[header] = values[index]
        ? values[index].replace(/^"(.+(?="$))"$/, "$1").replace(/""/g, '"')
        : "";
      return obj;
    }, {});
  });

  return result;
}

// 测试函数
function testCsvToArrayOfObjects() {
  // 测试用例 1：基本 CSV 字符串
  const csv1 = `name,age,city
  John,30,New York
  Alice,25,Los Angeles
  Bob,35,Chicago`;
  console.log("测试用例 1:");
  console.log(csvToArrayOfObjects(csv1));

  // 测试用例 2：包含引号和逗号的 CSV 字符串
  const csv2 = `name,age,city
  "Doe, John",30,"New York, NY"
  "Smith, Alice",25,"Los Angeles, CA"
  "Brown, Bob",35,"Chicago, IL"`;
  console.log("\n测试用例 2:");
  console.log(csvToArrayOfObjects(csv2));

  // 测试用例 3：使用不同的分隔符
  const csv3 = `name;age;city
  John;30;New York
  Alice;25;Los Angeles
  Bob;35;Chicago`;
  console.log("\n测试用例 3:");
  console.log(csvToArrayOfObjects(csv3, ";"));

  // 测试用例 4：包含空值的 CSV 字符串
  const csv4 = `name,age,city
  John,,New York
  Alice,25,
  ,35,Chicago`;
  console.log("\n测试用例 4:");
  console.log(csvToArrayOfObjects(csv4));

  // 测试用例 5：只有标题行的 CSV 字符串
  const csv5 = "name,age,city";
  console.log("\n测试用例 5:");
  console.log(csvToArrayOfObjects(csv5));

  // 测试用例 6：空 CSV 字符串
  const csv6 = "";
  console.log("\n测试用例 6:");
  console.log(csvToArrayOfObjects(csv6));

  // 测试用例 7：无效输入
  console.log("\n测试用例 7:");
  console.log(csvToArrayOfObjects(123));
}

// 运行测试
testCsvToArrayOfObjects();
