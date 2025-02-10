const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Explain the difference between forEach, map, filter, and reduce.
// forEach 用于遍历，无返回值。
// map 用于转换，返回新数组。
// filter 用于筛选，返回新数组。
// reduce 用于汇总，返回单个值。

// Define a callback function before you use it in forEach, map, filter or reduce.

// Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country));

// Use forEach to console.log each name in the names array.
names.forEach((name) => console.log(name));
// Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => console.log(number));
// Use map to create a new array by changing each country to uppercase in the countries array.
const upperCaseCountries = countries.map((country) => country.toUpperCase());
// Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length);
// Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map((number) => number * number);
// Use map to change to each name to uppercase in the names array

const upperCaseNames = names.map((name) => name.toUpperCase());
// Use map to map the products array to its corresponding prices.
const productPrices = products.map((product) => product.price);
// Use filter to filter out countries containing land.
const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
// Use filter to filter out countries having six character.
const countriesWithSixLetters = countries.filter(
  (country) => country.length === 6
);
// Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixLettersOrMore = countries.filter(
  (country) => country.length >= 6
);
// Use filter to filter out country start with 'E';
const countriesStartWithE = countries.filter((country) =>
  country.startsWith("E")
);
// Use filter to filter out only prices with values.
const pricesWithValues = products.filter((product) => product.price);
// Use filter to filter out countries with an area smaller than 200000
const countriesWithAreaSmallerThan200000 = countries.filter(
  (country) => country.length < 200000
);
// Use filter to filter out countries with a population smaller than 200000
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// Use reduce to sum all the numbers in the numbers array.
const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur, 0);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const sentence = countries.reduce((acc, cur, index) => {
  if (index === countries.length - 1) {
    return `${acc} and ${cur} are north European countries`;
  }
  return `${acc}, ${cur}`;
}, countries[0]);
// Explain the difference between some and every

// Use some to check if some names' length greater than seven in names array
const isSomeNamesLengthGreaterThanSeven = names.some((name) => name.length > 7);

// Use every to check if all the countries contain the word land
const isEveryCountryContainLand = countries.every((country) =>
  country.includes("land")
);
// Explain the difference between find and findIndex.

// Use find to find the first country containing only six letters in the countries array
const countryWithSixLetters = countries.find((country) => country.length === 6);
// Use findIndex to find the position of the first country containing only six letters in the countries array
const indexOfCountryWithSixLetters = countries.findIndex(
  (country) => country.length === 6
);
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const indexOfNorway = countries.findIndex((country) => country === "Norway");
// Use findIndex to find the position of the first country containing only five letters in the countries array
const indexOfCountryWithFiveLetters = countries.findIndex(
  (country) => country.length === 5
);
// Use findIndex to find the position of the first country containing the word land in the countries array
const indexOfCountryWithLand = countries.findIndex((country) =>
  country.includes("land")
);
// Use findIndex to find the position of the first country containing the word land in the countries array
const indexOfCountryWithLand2 = countries.findIndex((country) =>
  country.includes("land")
);
// Use findIndex to find the first country containing six letters in the countries array
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const products2 = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products2.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

const numbers2 = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers2.sort()); //[100, 3.14, 37, 9.81]
numbers2.sort(function (a, b) {
  return a - b;
});

console.log(numbers2); // [3.14, 9.81, 37, 100]

numbers2.sort(function (a, b) {
  return b - a;
});
console.log(numbers2); //[100, 37, 9.81, 3.14]

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
});

// or

objArr.sort(function (a, b) {
  if (a["key"] < b["key"]) return -1;
  if (a["key"] > b["key"]) return 1;
  return 0;
});

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
// [{…}, {…}, {…}, {…}]

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .map((product) => product.price)
  .filter((price) => typeof price === "number")
  .reduce((acc, cur) => acc + cur, 0);

//Find the sum of price of products using only reduce reduce(callback))
const totalPrice2 = products.reduce((acc, cur) => {
  if (typeof cur.price === "number") {
    return acc + cur.price;
  }
  return acc;
}, 0);

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = (pattern) => {
  return countries.filter((country) => country.includes(pattern));
};

console.log(categorizeCountries("land")); //['Finland', 'IceLand']

//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
"Finland".toUpperCase().split(""); // ['F', 'I', 'N', 'L', 'A', 'N', 'D']
const letterCount = () => {
  return countries.map((country) => {
    return {
      [country[0]]: country.split(country[0]).length - 1,
    };
  });
};
