/**
 * Adds "Py" to the start of a string if it's not already present
 * @param {string} str - The input string
 * @returns {string} - The resulting string
 */

function addPy(str) {
  if (str.length >= 2 && str.substring(0, 2) === "Py") {
    return str;
  }
  return `Py${str}`;
}

// Test function
function testAddPy() {
  console.log(addPy("thon")); // Expected output: "Python"
  console.log(addPy("Python")); // Expected output: "Python"
  console.log(addPy("")); // Expected output: "Py"
  console.log(addPy("py")); // Expected output: "Pypy"
  console.log(addPy("PyCharm")); // Expected output: "PyCharm"
  console.log(addPy("Hello")); // Expected output: "PyHello"
}

// Run the test
testAddPy();
