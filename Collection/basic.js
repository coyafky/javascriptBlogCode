const companies = new Set();
console.log(companies);

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

for (const language of setOfLanguages) {
  console.log(language);
}
// creating an empty set
console.log(companies.size); // 0

companies.add("Google"); // add element to the set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size); // 5 elements in the set
console.log(companies);

console.log(companies.delete("Google"));
console.log(companies.size); // 4 elements left in the set
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);
console.log(C.size); // 6 elements in the set
console.log(C.has(3)); // true

const map1 = new Map();
console.log(map1);

countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map = new Map(countries);
console.log(map);
console.log(map.size);
const countriesMap = new Map();
console.log(countriesMap.size);
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(countriesMap);
console.log(countriesMap.size);

console.log(countriesMap.get("Finland"));

console.log(countriesMap.has("Finland"));

for (const country of countriesMap) {
  console.log(country);
}

const a1 = [4, 5, 8, 9];
const b1 = [3, 4, 5, 7];
const countries1 = ["Finland", "Sweden", "Norway"];

// create an empty set
const set = new Set();
// Create a set containing 0 to 10 using loop
for (let i = 0; i <= 10; i++) {
  set.add(i);
}
// Remove an element from a set
set.delete(3);

// Clear a set
set.clear();
// Create a set of 5 string elements from array
const setOfCountries = new Set(countries1);

// Create a map of countries and number of characters of a country
const map2 = new Map();
for (const country of countries1) {
  map2.set(country, country.length);
}

// Find a union b
// Find a intersection b
// Find a with b

const A1 = new Set(a1);
const B1 = new Set(b1);
const union = new Set([...A1, ...B1]);
const intersection = new Set([...A1].filter((x) => B1.has(x)));
const aDifferenceB = new Set([...A1].filter((x) => !B1.has(x)));

console.log(union);
console.log(intersection);
console.log(aDifferenceB);

// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:
