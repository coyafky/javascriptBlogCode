/**
 * Checks if a given integer is within 20 of 100 or 400
 * @param {number} num - The integer to check
 * @returns {boolean} - True if the number is within range, false otherwise
 */
function isWithin20of100or400(num) {
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
}

// Test function
function testIsWithin20of100or400() {
  console.log(isWithin20of100or400(90)); // Expected output: true
  console.log(isWithin20of100or400(120)); // Expected output: true
  console.log(isWithin20of100or400(380)); // Expected output: true
  console.log(isWithin20of100or400(420)); // Expected output: true
  console.log(isWithin20of100or400(200)); // Expected output: false
  console.log(isWithin20of100or400(50)); // Expected output: false
  console.log(isWithin20of100or400(500)); // Expected output: false
  console.log(isWithin20of100or400(100)); // Expected output: true
  console.log(isWithin20of100or400(400)); // Expected output: true
}

// Run the test
testIsWithin20of100or400();
