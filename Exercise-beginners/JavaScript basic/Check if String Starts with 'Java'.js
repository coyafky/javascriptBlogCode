/**
 * Checks if a string starts with 'Java'
 * @param {string} str - The input string
 * @returns {boolean} - True if the string starts with 'Java', false otherwise
 */
function startsWithJava(str) {
  return str.startsWith("Java");
}

// Test function
function testStartsWithJava() {
  console.log(startsWithJava("JavaScript")); // Expected output: true
  console.log(startsWithJava("Java")); // Expected output: true
  console.log(startsWithJava("Python")); // Expected output: false
  console.log(startsWithJava("java")); // Expected output: false
  console.log(startsWithJava("JAVA")); // Expected output: false
  console.log(startsWithJava("Java Script")); // Expected output: true
  console.log(startsWithJava("")); // Expected output: false
  console.log(startsWithJava("Jav")); // Expected output: false
}

// Run the test
testStartsWithJava();
