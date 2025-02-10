let score = 80;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
// Output: B

// 条件表达式
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}

function handleOrderStatusChange(status) {
  switch (status) {
    case "pending":
      // Handle pending order
      break;
    case "shipped":
      // Handle shipped order
      break;
    case "delivered":
      // Handle delivered order
      break;
    case "cancelled":
      // Handle cancelled order
      break;
    default:
      // Handle unknown status
    
      break;
  }
}
