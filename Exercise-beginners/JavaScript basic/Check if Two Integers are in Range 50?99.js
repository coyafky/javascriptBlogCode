/**
 * Checks if at least one of two integers is in the range 50..99 (inclusive)
 * @param {number} num1 - The first integer
 * @param {number} num2 - The second integer
 * @returns {boolean} - True if either number is in range, false otherwise
 */
function isInRange50to99(num1, num2) {
  return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

// Test function
function testIsInRange50to99() {
  console.log(isInRange50to99(50, 99)); // Expected output: true
  console.log(isInRange50to99(75, 100)); // Expected output: true
  console.log(isInRange50to99(49, 99)); // Expected output: true
  console.log(isInRange50to99(50, 49)); // Expected output: true
  console.log(isInRange50to99(25, 100)); // Expected output: false
  console.log(isInRange50to99(0, 49)); // Expected output: false
  console.log(isInRange50to99(55, 65)); // Expected output: true
  console.log(isInRange50to99(49, 100)); // Expected output: false
}

// Run the test
testIsInRange50to99();
