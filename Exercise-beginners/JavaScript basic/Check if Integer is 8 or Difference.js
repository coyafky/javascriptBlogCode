/**
 * Checks if one of the numbers is 8, or if their sum or difference is 8
 * @param {number} a - The first integer
 * @param {number} b - The second integer
 * @returns {boolean} - True if the condition is met, false otherwise
 */
function checkEight(a, b) {
  return a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8;
}

// Test function
function testCheckEight() {
  console.log(checkEight(8, 2)); // Expected output: true
  console.log(checkEight(3, 8)); // Expected output: true
  console.log(checkEight(3, 5)); // Expected output: true
  console.log(checkEight(10, 2)); // Expected output: true
  console.log(checkEight(-3, 11)); // Expected output: true
  console.log(checkEight(4, 4)); // Expected output: true
  console.log(checkEight(5, 5)); // Expected output: false
  console.log(checkEight(7, 1)); // Expected output: true
  console.log(checkEight(0, 0)); // Expected output: false
  console.log(checkEight(16, 8)); // Expected output: true
}

// Run the test
testCheckEight();
