function differenceFrom19(num) {
  if (num <= 19) {
    return 19 - num;
  } else {
    return (num - 19) * 3;
  }
}

function testDifferenceFrom19() {
  console.log(differenceFrom19(15)); // 4
  console.log(differenceFrom19(25)); // 12
  console.log(differenceFrom19(19)); // 0
}

testDifferenceFrom19();
