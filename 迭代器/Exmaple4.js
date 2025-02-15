const infos = {
  name: 'why',
  age: 18,
  height: 1.88,
  friends: ['abc', 'cba', 'nba'],
  [Symbol.iterator]: function () {
    let keys = Object.keys(this); // 拿到对象的所有的key
    let values = Object.values(this); // 拿到对象的所有的value
    let entries = Object.entries(this); // 拿到对象的所有的key和value
    let index = 0;
    return { // 返回一个迭代器
      next: () => {
        // 1。迭代对象
        if (index < keys.length) {
          return {
            done: false,
            value: this[keys[index++]],
          };
        } else {
          return {
            done: true,
            value: undefined,
          };
        }
      },
    };
  },
};

for (const item of infos) {
  console.log(item);
}


