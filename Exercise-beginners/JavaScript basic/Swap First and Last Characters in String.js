/**
 * Swaps the first and last characters of a given string
 * @param {string} str - The input string
 * @returns {string} - The modified string with first and last characters swapped
 */

function swapFirstLastChars(str) {
  if (str.length < 2) {
    return str;
  }
  return str[str.length - 1] + str.substring(1, str.length - 1) + str[0];
}

// Test function
function testSwapFirstLast() {
  console.log(swapFirstLast("Python")); // Expected output: "nythoP"
  console.log(swapFirstLast("JavaScript")); // Expected output: "tavaScripJ"
  console.log(swapFirstLast("a")); // Expected output: "a"
  console.log(swapFirstLast("ab")); // Expected output: "ba"
  console.log(swapFirstLast("")); // Expected output: ""
  console.log(swapFirstLast("Hello World!")); // Expected output: "!ello WorldH"
}

// Run the test
testSwapFirstLast();
