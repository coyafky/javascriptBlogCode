/**
 * Checks if three numbers are increasing in strict or soft mode
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {number} c - The third number
 * @returns {string} - "strict" for strict increase, "soft" for soft increase, "none" otherwise
 */
function checkIncreasingMode(a, b, c) {
  if (a < b && b < c) {
    return "strict";
  } else if (a <= b && b <= c) {
    return "soft";
  } else {
    return "none";
  }
}

// Test function
function testCheckIncreasingMode() {
  console.log(checkIncreasingMode(10, 15, 31)); // Expected output: "strict"
  console.log(checkIncreasingMode(24, 22, 31)); // Expected output: "soft"
  console.log(checkIncreasingMode(22, 22, 31)); // Expected output: "soft"
  console.log(checkIncreasingMode(50, 21, 15)); // Expected output: "none"
  console.log(checkIncreasingMode(1, 2, 3)); // Expected output: "strict"
  console.log(checkIncreasingMode(1, 1, 1)); // Expected output: "soft"
  console.log(checkIncreasingMode(1, 1, 2)); // Expected output: "soft"
  console.log(checkIncreasingMode(3, 2, 1)); // Expected output: "none"
  console.log(checkIncreasingMode(0, 0, 0)); // Expected output: "soft"
  console.log(checkIncreasingMode(-1, 0, 1)); // Expected output: "strict"
}

// Run the test
testCheckIncreasingMode();
