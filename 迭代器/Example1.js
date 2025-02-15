const names = ['abc', 'cba', 'nba'];

//  给数组 names 创建一个迭代器

let index = 0;
const iterator = {
  next: function () {
    // done :Boolean 表示迭代是否结束
    // value : 任意类型 表示当前迭代的 undefined
    if (index < names.length) {
      return {
        done: false,
        value: names[index++],
      };
    } else {
      return {
        done: true,
        value: undefined,
      };
    }
  },
};

const value1 = iterator.next();
console.log(value1);
const value2 = iterator.next();
console.log(value2);
const value3 = iterator.next();
console.log(value3);
const value4 = iterator.next();
console.log(value4);
