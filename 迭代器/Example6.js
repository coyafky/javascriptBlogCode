const names = ['abc', 'cba', 'nba'];

function foo(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}
const args = new Set([1, 2, 3]);
const nums = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
foo(...nums);
foo(...args);
foo(...names);
