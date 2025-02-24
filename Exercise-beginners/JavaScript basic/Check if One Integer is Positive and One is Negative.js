/**
 * Checks if one integer is positive and the other is negative
 * @param {number} a - The first integer
 * @param {number} b - The second integer
 * @returns {boolean} - True if one is positive and one is negative, false otherwise
 */

function checkPositiveNegative(a, b) {
  return (a > 0 && b < 0) || (a < 0 && b > 0);
}
// Test function
function testCheckPositiveNegative() {
  console.log(checkPositiveNegative(2, -4)); // Expected output: true
  console.log(checkPositiveNegative(-2, 4)); // Expected output: true
  console.log(checkPositiveNegative(2, 4)); // Expected output: false
  console.log(checkPositiveNegative(-2, -4)); // Expected output: false
  console.log(checkPositiveNegative(0, -4)); // Expected output: false
  console.log(checkPositiveNegative(2, 0)); // Expected output: false
}

// Run the test
testCheckPositiveNegative();
