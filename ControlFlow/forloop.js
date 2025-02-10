// for loop condition
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}
// Output: 0 1 2 3 4
// Output: 5 4 3 2 1

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

const newarr = [];
for (let i = 0; i < 5; i++) {
  newarr.push(numbers[i] * numbers[i]);
}

console.log(newarr);

const newarr2 = [];
for (let i = 0; i < countries.length; i++) {
  newarr2.push(countries[i].toUpperCase());
}
console.log(newarr2);

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

for (const country of countries) {
  console.log(country.toUpperCase());
}

const numbers2 = [1, 2, 3, 4, 5];
for (let number of numbers2) {
  console.log(number);
  console.log(number * number);
}

const numbers3 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let number of numbers3) {
  sum2 += number;
}
console.log(sum2);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
for (const tech of webTechs) {
  console.log(tech);
}
