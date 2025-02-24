/**
 * Evaluates if a student gets an A+ grade based on total marks and exam type
 * @param {number} totalMarks - The total marks obtained by the student
 * @param {boolean} isFinalExam - Whether it's a final exam (true) or not (false)
 * @returns {boolean} - True if the student gets an A+, false otherwise
 */
function evaluateGrade(totalMarks, isFinalExam = false) {
  if (isFinalExam) {
    return totalMarks >= 90;
  } else {
    return totalMarks >= 89 && totalMarks <= 100;
  }
}

// Test function
function testEvaluateGrade() {
  console.log(evaluateGrade(95)); // Expected output: true
  console.log(evaluateGrade(89)); // Expected output: true
  console.log(evaluateGrade(100)); // Expected output: true
  console.log(evaluateGrade(88)); // Expected output: false
  console.log(evaluateGrade(101)); // Expected output: false
  console.log(evaluateGrade(89, true)); // Expected output: false
  console.log(evaluateGrade(90, true)); // Expected output: true
  console.log(evaluateGrade(95, true)); // Expected output: true
  console.log(evaluateGrade(85, true)); // Expected output: false
  console.log(evaluateGrade(100, true)); // Expected output: true
}

// Run the test
testEvaluateGrade();
