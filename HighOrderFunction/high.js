// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2;
};
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));

// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

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
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
);

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)


const numbers2 = [1, 2, 3, 4, 5]
const sum = numbers2.reduce((acc, cur) => acc + cur, 0)

console.log(sum)