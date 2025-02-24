/**
 * Removes a character at the specified position in a given string
 * @param {string} str - The input string
 * @param {number} position - The position of the character to remove (0-based index)
 * @returns {string} - The modified string
 */

function removeCharacter(str, position) {
  if (position < 0 || position >= str.length) {
    return "Invalid position";
  }
  return str.slice(0, position) + str.slice(position + 1);
}
function testRemoveCharacter() {
  console.log(removeCharacter("Python", 0)); // Expected output: "ython"
  console.log(removeCharacter("Python", 3)); // Expected output: "Pyton"
  console.log(removeCharacter("Python", 5)); // Expected output: "Pytho"
  console.log(removeCharacter("Python", 6)); // Expected output: "Python"
  console.log(removeCharacter("Python", -1)); // Expected output: "Python"
  console.log(removeCharacter("", 0)); // Expected output: ""
  console.log(removeCharacter("A", 0)); // Expected output: ""
}

testRemoveCharacter();
