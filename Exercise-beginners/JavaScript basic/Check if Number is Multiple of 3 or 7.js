/**
 * Checks if a number is a multiple of 3 or 7
 * @param {number} num - The number to check
 * @returns {boolean} - True if the number is a multiple of 3 or 7, false otherwise
 */
function isMultipleOf3Or7(num) {
  if (num <= 0) {
    return false; // Only positive numbers are considered
  }
  return num % 3 === 0 || num % 7 === 0;
}

// Test function
function testIsMultipleOf3Or7() {
  console.log(isMultipleOf3Or7(3)); // Expected output: true
  console.log(isMultipleOf3Or7(7)); // Expected output: true
  console.log(isMultipleOf3Or7(21)); // Expected output: true
  console.log(isMultipleOf3Or7(14)); // Expected output: true
  console.log(isMultipleOf3Or7(10)); // Expected output: false
  console.log(isMultipleOf3Or7(0)); // Expected output: false
  console.log(isMultipleOf3Or7(-3)); // Expected output: false
  console.log(isMultipleOf3Or7(33)); // Expected output: true
  console.log(isMultipleOf3Or7(70)); // Expected output: true
}

// Run the test
testIsMultipleOf3Or7();
