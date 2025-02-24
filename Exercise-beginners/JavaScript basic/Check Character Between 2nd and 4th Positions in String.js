/**
 * Checks if a specified character exists between the 2nd and 4th positions in a string
 * @param {string} str - The input string
 * @param {string} char - The character to search for
 * @returns {boolean} - True if the character is found, false otherwise
 */
function isCharBetween2ndAnd4th(str, char) {
  if (str.length < 4 || char.length !== 1) {
    return false;
  }
  return str.substring(1, 4).includes(char);
}

// Test function
function testIsCharBetween2ndAnd4th() {
  console.log(isCharBetween2ndAnd4th("Python", "y")); // Expected output: true
  console.log(isCharBetween2ndAnd4th("JavaScript", "a")); // Expected output: true
  console.log(isCharBetween2ndAnd4th("Console", "o")); // Expected output: true
  console.log(isCharBetween2ndAnd4th("Hello", "l")); // Expected output: false
  console.log(isCharBetween2ndAnd4th("World", "r")); // Expected output: true
  console.log(isCharBetween2ndAnd4th("Hi", "i")); // Expected output: false
  console.log(isCharBetween2ndAnd4th("Code", "x")); // Expected output: false
  console.log(isCharBetween2ndAnd4th("", "a")); // Expected output: false
}

// Run the test
testIsCharBetween2ndAnd4th();
/**
 * Checks if the last digit of three positive integers is the same
 * @param {number} num1 - The first integer
 * @param {number} num2 - The second integer
 * @param {number} num3 - The third integer
 * @returns {boolean} - True if the last digits are the same, false otherwise
 */

function lastDigitsSame(num1, num2, num3) {
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return false;
  }
  return num1 % 10 === num2 % 10 && num2 % 10 === num3 % 10;
}
// Test function
function testLastDigitSame() {
  console.log(lastDigitSame(23, 43, 53)); // Expected output: true
  console.log(lastDigitSame(1, 11, 21)); // Expected output: true
  console.log(lastDigitSame(100, 200, 300)); // Expected output: true
  console.log(lastDigitSame(15, 25, 35)); // Expected output: true
  console.log(lastDigitSame(10, 20, 31)); // Expected output: false
  console.log(lastDigitSame(105, 20, 30)); // Expected output: false
  console.log(lastDigitSame(0, 10, 100)); // Expected output: true
  console.log(lastDigitSame(-23, 43, 53)); // Expected output: false
}
