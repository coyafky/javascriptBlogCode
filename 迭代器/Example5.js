const names = ['abc', 'cba', 'nba'];

for (const item of names) {
  console.log(item);
}

console.log(names[Symbol.iterator]()); // 迭代器

const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
for (const item of set) {
  console.log(item);
}
console.log(set[Symbol.iterator]());
const SetIterator = set[Symbol.iterator]();
console.log(SetIterator.next());
console.log(SetIterator.next());

const string = 'abcdefg';
for (const item of string) {
  console.log(item);
}
const StringIterator = string[Symbol.iterator]();
console.log(StringIterator.next());
console.log(StringIterator.next());
