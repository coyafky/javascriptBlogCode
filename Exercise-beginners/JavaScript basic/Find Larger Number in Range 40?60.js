/**
 * Finds the larger number from two given integers in the range 40..60 inclusive
 * @param {number} a - The first integer
 * @param {number} b - The second integer
 * @returns {number|null} - The larger number, or null if inputs are invalid
 */
function findLargerInRange(a, b) {
  if (isInRange(a) && isInRange(b)) {
    return Math.max(a, b);
  }
  return null;
}

/**
 * Checks if a number is in the range 40..60 inclusive
 * @param {number} num - The number to check
 * @returns {boolean} - True if the number is in range, false otherwise
 */
function isInRange(num) {
  return num >= 40 && num <= 60;
}

// Test function
function testFindLargerInRange() {
  console.log(findLargerInRange(45, 60)); // Expected output: 60
  console.log(findLargerInRange(40, 50)); // Expected output: 50
  console.log(findLargerInRange(55, 45)); // Expected output: 55
  console.log(findLargerInRange(40, 40)); // Expected output: 40
  console.log(findLargerInRange(60, 60)); // Expected output: 60
  console.log(findLargerInRange(39, 50)); // Expected output: null
  console.log(findLargerInRange(50, 61)); // Expected output: null
  console.log(findLargerInRange(30, 70)); // Expected output: null
}

// Run the test
testFindLargerInRange();
