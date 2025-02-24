/**
 * Finds the largest of three given integers
 * @param {number} a - The first integer
 * @param {number} b - The second integer
 * @param {number} c - The third integer
 * @returns {number} - The largest integer
 */

function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

function testFindLargest() {
  console.log(findLargest(1, 2, 3)); // Expected output: 3
  console.log(findLargest(5, 2, 8)); // Expected output: 8
  console.log(findLargest(10, 10, 10)); // Expected output: 10
  console.log(findLargest(-1, 0, 1)); // Expected output: 1
  console.log(findLargest(100, 50, 75)); // Expected output: 100
  console.log(findLargest(-5, -2, -8)); // Expected output: -2
  console.log(findLargest(0, 0, 0)); // Expected output: 0
}

testFindLargest();
