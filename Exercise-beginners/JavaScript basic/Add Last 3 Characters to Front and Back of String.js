/**
 * Creates a new string by adding the last 3 characters to front and back
 * @param {string} str - The input string
 * @returns {string} - The modified string or null if input is invalid
 */
function addLast3ToFrontAndBack(str) {
  if (str.length < 3) {
    return null; // Return null for strings shorter than 3 characters
  }

  const last3 = str.slice(-3);
  return last3 + str + last3;
}

// Test function
function testAddLast3ToFrontAndBack() {
  console.log(addLast3ToFrontAndBack("Python")); // Expected output: "honPythonhon"
  console.log(addLast3ToFrontAndBack("JavaScript")); // Expected output: "iptJavaScriptipt"
  console.log(addLast3ToFrontAndBack("Hi")); // Expected output: null
  console.log(addLast3ToFrontAndBack("Code")); // Expected output: "odeCodeode"
  console.log(addLast3ToFrontAndBack("ab")); // Expected output: null
  console.log(addLast3ToFrontAndBack("")); // Expected output: null
  console.log(addLast3ToFrontAndBack("12345")); // Expected output: "34512345345"
}

// Run the test
testAddLast3ToFrontAndBack();
