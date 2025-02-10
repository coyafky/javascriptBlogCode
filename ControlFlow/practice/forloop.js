for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let i = 10; i >= 10; i--) {
  console.log(i);
}

let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

for (let i = 1; i <= 9; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

// 打印表头
console.log("i    i^2   i^3");

// 使用循环打印每一行
for (let i = 0; i <= 10; i++) {
  // 计算 i 的平方和立方
  let square = i * i;
  let cube = i * i * i;

  // 使用模板字符串和 padStart 方法来格式化输出
  console.log(
    `${i.toString().padStart(2)}    ${square.toString().padStart(3)}    ${cube.toString().padStart(4)}`
  );
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(`Sum of even numbers: ${evenSum}`);
console.log(`Sum of odd numbers: ${oddSum}`);

// Develop a small script which generate array of 5 random numbers

let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

let arr2 = [];
while (arr2.length < 5) {
  let r = Math.floor(Math.random() * 100) + 1;
  if (arr2.indexOf(r) === -1) arr2.push(r);
}
// Develop a small script which generate a six characters random id:

let id = "";
for (let i = 0; i < 6; i++) {
  id += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(id);

// Develop a small script which generate a six characters random id:

let id2 = "";
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < 6; i++) {
  id2 += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(id2);

// Write a script which generates a random hexadecimal number.

let hex = "#";
const hexChars = "0123456789abcdef";
for (let i = 0; i < 6; i++) {
  hex += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
}
console.log(hex);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
// Using the above countries array, create an array for countries length'.

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

let upperCountries = [];
for (let country of countries) {
  upperCountries.push(country.toUpperCase());
}
console.log(upperCountries);

// Using the above countries array, find the country containing only 5 characters.

const countries5 = countries.filter((country) => country.length === 5);
console.log(countries5);
const countries5_2 = [];

for (let country of countries) {
  if (country.length === 5) {
    countries5_2.push(country);
  }
}
console.log(countries5_2);

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ["MongoDB", "Express", "React", "Node"];
const mernAcronym = mernStack.reduce(
  (accumulator, item) => accumulator + item.charAt(0),
  ""
);
console.log(mernAcronym);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const stack = fullStack.flat();
console.log(stack);
