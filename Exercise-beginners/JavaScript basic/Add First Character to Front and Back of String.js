/**
 * Adds the first character of a string to its front and back
 * @param {string} str - The input string
 * @returns {string} - The modified string
 */
function addFirstCharToFrontAndBack(str) {
  if (str.length === 0) {
    return str;
  }

  const firstChar = str.charAt(0);
  return firstChar + str + firstChar;
}

// Test function
function testAddFirstCharToFrontAndBack() {
  console.log(addFirstCharToFrontAndBack("Python")); // Expected output: "PythonP"
  console.log(addFirstCharToFrontAndBack("JavaScript")); // Expected output: "JJavaScriptJ"
  console.log(addFirstCharToFrontAndBack("a")); // Expected output: "aaa"
  console.log(addFirstCharToFrontAndBack("")); // Expected output: ""
  console.log(addFirstCharToFrontAndBack("123")); // Expected output: "11231"
  console.log(addFirstCharToFrontAndBack("Hello!")); // Expected output: "HHello!H"
}

// Run the test
testAddFirstCharToFrontAndBack();
