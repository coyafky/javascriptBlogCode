/**
 * 将 CSV 字符串转换为二维数组
 *
 * @param {string} csvString - 输入的 CSV 字符串
 * @param {string} delimiter - 分隔符，默认为逗号
 * @param {boolean} hasHeader - 是否包含表头，默认为 true
 * @returns {Array<Array<string>>} - 转换后的二维数组
 */
function csvToArray(csvString, delimiter = ",", hasHeader = true) {
  // 检查输入是否为字符串
  if (typeof csvString !== "string") {
    return "Invalid input: not a string";
  }

  // 将 CSV 字符串按行分割
  const rows = csvString.split("\n");

  // 如果 CSV 为空，返回空数组
  if (rows.length === 0) {
    return [];
  }

  // 解析每一行
  const result = rows.map((row) => {
    // 使用正则表达式分割行，考虑引号内的逗号
    return row.split(new RegExp(`${delimiter}(?=(?:(?:[^"]*"){2})*[^"]*$)`));
  });

  // 移除每个单元格中的引号（如果存在）
  result.forEach((row) => {
    row.forEach((cell, index) => {
      row[index] = cell.replace(/^"(.*)"$/, "$1");
    });
  });

  // 如果没有表头，直接返回结果
  if (!hasHeader) {
    return result;
  }

  // 如果有表头，返回除表头外的数据
  return result.slice(1);
}

// 测试函数
function testCsvToArray() {
  // 测试用例 1：基本 CSV 字符串
  const csv1 = `name,age,city
  John,30,New York
  Alice,25,Los Angeles
  Bob,35,Chicago`;
  console.log("测试用例 1:");
  console.log(csvToArray(csv1));

  // 测试用例 2：包含引号的 CSV 字符串
  const csv2 = `"name","age","city"
  "John Doe",30,"New York, NY"
  "Alice Smith",25,"Los Angeles, CA"
  "Bob Brown",35,"Chicago, IL"`;
  console.log("\n测试用例 2:");
  console.log(csvToArray(csv2));

  // 测试用例 3：使用不同的分隔符
  const csv3 = `name;age;city
  John;30;New York
  Alice;25;Los Angeles
  Bob;35;Chicago`;
  console.log("\n测试用例 3:");
  console.log(csvToArray(csv3, ";"));

  // 测试用例 4：没有表头
  const csv4 = `John,30,New York
  Alice,25,Los Angeles
  Bob,35,Chicago`;
  console.log("\n测试用例 4:");
  console.log(csvToArray(csv4, ",", false));

  // 测试用例 5：空 CSV 字符串
  const csv5 = "";
  console.log("\n测试用例 5:");
  console.log(csvToArray(csv5));

  // 测试用例 6：无效输入
  console.log("\n测试用例 6:");
  console.log(csvToArray(123));
}

// 运行测试
testCsvToArray();
