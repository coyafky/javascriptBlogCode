const infos = {
  friends: ['abc', 'cba', 'nba'],
};
let index = 0;

const infosIterator = {
  next: function () {
    if (index < infos.friends.length) {
      return {
        done: false,
        value: infos.friends[index++],
      };
    } else {
      return {
        done: true,
        value: undefined,
      };
    }
  },
};
console.log(infosIterator.next());
console.log(infosIterator.next());
console.log(infosIterator.next());
console.log(infosIterator.next());

// 将 infosIterator 迭代器  变成 可迭代对象
//将 infosIterator 迭代器  变成  一个对象的默认迭代器
// 必须实现一个 Symbol.iterator 方法
// 这个方法 必须返回一个 迭代器

class Infos {
  constructor() {
    this.friends = ['abc', 'cba', 'nba'];
  }
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.friends.length) {
          return {
            done: false,
            value: this.friends[index++],
          };
        } else {
          return {
            done: true,
            value: undefined,
          };
        }
      },
    };
  }
}

// 可迭代对象的特点
// 1. 必须有一个 Symbol.iterator 方法
// 2. Symbol.iterator 方法必须返回一个 迭代器

const infos2 = new Infos();

for (const item of infos2) {
  console.log(item);
}
console.log('---------------------');
console.log(infos2[Symbol.iterator]());
console.log('---------------------');
const infosIterator2 = infos2[Symbol.iterator]();
console.log(infosIterator2.next());
console.log(infosIterator2.next());
console.log(infosIterator2.next());
console.log(infosIterator2.next());

