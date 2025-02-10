function printFullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

printFullName("John", "Doe");

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName("John", "Doe"));

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return length * width;
}

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

const areaOfCircle2 = (radius) => Math.PI * radius * radius;

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
  return 2 * Math.PI * radius;
}

const circumOfCircle2 = (radius) => 2 * Math.PI * radius;

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  return mass / volume;
}

const density2 = (mass, volume) => mass / volume;

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
  return distance / time;
}

const speed2 = (distance, time) => distance / time;

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
  return mass * gravity;
}

const weight2 = (mass, gravity) => mass * gravity;

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

const convertCelciusToFahrenheit2 = (celcius) => (celcius * 9) / 5 + 32;

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bodyMassIndex.
function bodyMassIndex(weight, height) {
  return weight / height ** 2;
}

const bodyMassIndex2 = (weight, height) => weight / height ** 2;

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  if (month === "September" || month === "October" || month === "November") {
    return "Autumn";
  } else if (
    month === "December" ||
    month === "January" ||
    month === "February"
  ) {
    return "Winter";
  } else if (month === "March" || month === "April" || month === "May") {
    return "Spring";
  } else if (month === "June" || month === "July" || month === "August") {
    return "Summer";
  }
}

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(numOne, numTwo, numThree) {
  if (numOne > numTwo && numOne > numThree) {
    return numOne;
  } else if (numTwo > numOne && numTwo > numThree) {
    return numTwo;
  } else {
    return numThree;
  }
}

//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c, x, y) {
  return a * x + b * y + c;
}

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation(a, b, c) {
  let d = b * b - 4 * a * c;
  if (d < 0) {
    return "No solution";
  } else if (d === 0) {
    return -b / (2 * a);
  } else {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
}

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  let date = new Date();
  console.log(
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  );
}

//Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  let temp = x;
  x = y;
  y = temp;
  return [x, y];
}

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr;
}

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item) {
  let arr = [];
  arr.push(item);
  return arr;
}
//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
  let arr = [1, 2, 3, 4, 5];
  arr.splice(index, 1);
  return arr;
}

//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
  let evens = 0;
  let odds = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  return [evens, odds];
}

//Write a function which takes any number of arguments and return the sum of the argumentsu

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

//Writ a function which generates a randomUserIp.
function randomUserIp() {
  let ip =
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255);
  return ip;
}

//Write a function which generates a randomMacAddress

function randomMacAddress() {
  let characters = "ABCDEF0123456789";
  let mac = "";
  for (let i = 0; i < 6; i++) {
    mac += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return mac;
}

//Write a function which generates a randomHexaNumber.
function randomHexaNumber() {
  let characters = "";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return hex;
}

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
  let newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
