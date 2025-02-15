const names = ['abc', 'cba', 'nba'];
const nums = [10, 20, 30, 24, 56, 78, 90];

function createArrayIterator(arr) { // 迭代器
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        return {
          done: false, // 迭代没有结束
          value: arr[index++], // 后置++ 先返回值 再++
        };
      } else {
        return {
          done: true, // 迭代结束
          value: undefined, // 没有值
        };
      }
    },
  };
}
const namesIterator = createArrayIterator(names);
const numsIterator = createArrayIterator(nums);
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
