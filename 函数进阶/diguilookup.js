// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/recursiveTraversal.js

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    // 如果是数组，说明我们到达了员工列表
    // 求和并返回结果
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    // 否则，这是一个对象，我们需要继续递归遍历它的属性
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 递归调用并累加结果
    }
    return sum;
  }
}

// 使用函数
console.log(sumSalaries(company)); // 应该输出所有薪资的总和
