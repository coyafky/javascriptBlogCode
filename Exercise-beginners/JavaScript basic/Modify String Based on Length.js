/**
 * Modifies a string based on its length
 * @param {string} str - The input string
 * @returns {string} - The modified string
 */

function modifyString(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.slice(0, 3).toUpperCase() + str.slice(3);
  }
}
//Test function
function testModifyString() {
  console.log(modifyString("Python")); // Expected output: "pytHon"
  console.log(modifyString("JavaScript")); // Expected output: "javAScript"
  console.log(modifyString("Hi")); // Expected output: "HI"
  console.log(modifyString("")); // Expected output: ""
  console.log(modifyString("HELLO")); // Expected output: "helLO"
  console.log(modifyString("a")); // Expected output: "A"
  console.log(modifyString("AB")); // Expected output: "AB"
  console.log(modifyString("abcdefg")); // Expected output: "abcdefg"
}
modifyString();
