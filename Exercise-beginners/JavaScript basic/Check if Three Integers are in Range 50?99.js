/**
 * Checks if at least one of three integers is in the range 50..99 (inclusive)
 * @param {number} num1 - The first integer
 * @param {number} num2 - The second integer
 * @param {number} num3 - The third integer
 * @returns {boolean} - True if at least one number is in range, false otherwise
 */
function isInRange50to99(num1, num2, num3) {
  return (
    (num1 >= 50 && num1 <= 99) ||
    (num2 >= 50 && num2 <= 99) ||
    (num3 >= 50 && num3 <= 99)
  );
}

// Test function
function testIsInRange50to99() {
  console.log(isInRange50to99(50, 90, 99)); // Expected output: true
  console.log(isInRange50to99(5, 9, 70)); // Expected output: true
  console.log(isInRange50to99(55, 65, 75)); // Expected output: true
  console.log(isInRange50to99(49, 100, 101)); // Expected output: false
  console.log(isInRange50to99(50, 51, 52)); // Expected output: true
  console.log(isInRange50to99(49, 99, 100)); // Expected output: true
  console.log(isInRange50to99(0, 49, 100)); // Expected output: false
  console.log(isInRange50to99(48, 49, 50)); // Expected output: true
}

// Run the test
testIsInRange50to99();
