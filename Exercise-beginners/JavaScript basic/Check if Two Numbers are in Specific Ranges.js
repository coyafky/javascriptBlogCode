
/**
 * Finds the closest value to 100 from two given numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The number closest to 100
 */
function findClosestTo100(a, b) {
    const diffA = Math.abs(100 - a);
    const diffB = Math.abs(100 - b);
    
    if (diffA === diffB) {
      return Math.max(a, b);
    }
    
    return diffA < diffB ? a : b;
  }
  
  // Test function
  function testFindClosestTo100() {
    console.log(findClosestTo100(90, 110));   // Expected output: 90
    console.log(findClosestTo100(50, 150));   // Expected output: 150
    console.log(findClosestTo100(99, 101));   // Expected output: 99
    console.log(findClosestTo100(98, 102));   // Expected output: 102
    console.log(findClosestTo100(100, 100));  // Expected output: 100
    console.log(findClosestTo100(0, 200));    // Expected output: 200
    console.log(findClosestTo100(-10, 210));  // Expected output: 210
    console.log(findClosestTo100(500, -500)); // Expected output: 500
  }
  
  // Run the test
  testFindClosestTo100();
  