function sumOrTriple(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

function testSumOrTriple() {
  console.log(sumOrTriple(1, 2)); // 3
  console.log(sumOrTriple(1, 1)); // 3
  console.log(sumOrTriple(1, 3)); // 4
  console.log(sumOrTriple(1, 4)); // 5
  console.log(sumOrTriple(1, 5)); // 6
}
testSumOrTriple();
