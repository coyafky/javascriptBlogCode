const rectangle = {
  length: 10,
  width: 5,
};

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person);

//  get a  value
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.age);
console.log(person["age"]);
console.log(person.skills);
console.log(person["skills"]);

console.log(person.getFullName());

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};

console.log(person.getPersonInfo());

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

const keys = Object.keys(copyPerson);
console.log(keys);

const values = Object.values(copyPerson);
console.log(values);

const entries = Object.entries(copyPerson);
console.log(entries);

const hasOwnProperty = copyPerson.hasOwnProperty("firstName");
console.log(hasOwnProperty);

// // Exercises: Level 1
// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo

const dog = {};
console.log(dog);
dog.name = "Rex";
dog.legs = 4;
dog.color = "Black";
dog.age = 5;
dog.bark = function () {
  return "woof woof";
};
dog.breed = "German Shepherd";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.breed}.`;
};
console.log(dog.bark());
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());
console.log(dog.getDogInfo());

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.
let maxSkills = 0;
let personWithMaxSkills = "";
for (const person in users) {
  if (users[person].skills.length > maxSkills) {
    maxSkills = users[person].skills.length;
    personWithMaxSkills = person;
  }
}
console.log(personWithMaxSkills);

// Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0;
let usersWith50Points = 0;
for (const person in users) {
  if (users[person].isLoggedIn) {
    loggedInUsers++;
  }
  if (users[person].points >= 50) {
    usersWith50Points++;
  }
}
console.log(loggedInUsers);

//Find people who are MERN stack developer from the users object
const mernStack = ["MongoDB", "Express", "React", "Node"];
let mernStackDevs = [];
for (const person in users) {
  let skills = users[person].skills;
  if (
    skills.includes("MongoDB") &&
    skills.includes("Express") &&
    skills.includes("React") &&
    skills.includes("Node")
  ) {
    mernStackDevs.push(person);
  }
}

console.log(mernStackDevs);

// Set your name in the users object without modifying the original users object
const user = {
  name: "John Doe",
  email: "john@john",
  skills: ["HTML", "CSS", "JavaScript"],
  age: 20,
  isLoggedIn: false,
  points: 40,
};
user.name = "John Doe";
console.log(user);

// Set multiple values in the users object without modifying the original users object
const user2 = {
  name: "John Doe",
  email: "john@john",
  skills: ["HTML", "CSS", "JavaScript"],
  age: 20,
  isLoggedIn: false,
  points: 40,
};
user2.name = "John Doe";
user2.email = "john@john";
user2.skills = ["HTML", "CSS", "JavaScript"];
user2.age = 20;
user2.isLoggedIn = false;
user2.points = 40;
console.log(user2);

//Get all keys or properties of users object
console.log(Object.keys(users));

//Get all values of users object
console.log(Object.values(users));

//Convert users object into an array of arrays
console.log(Object.entries(users));

//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  incomes: [
    { description: "salary", amount: 100 },
    { description: "bonus", amount: 50 },
  ],
  expenses: [
    { description: "rent", amount: 900 },
    { description: "food", amount: 100 },
  ],
  totalIncome: function () {
    return this.incomes.reduce((acc, curr) => acc + curr.amount, 0);
  },
  totalExpense: function () {
    return this.expenses.reduce((acc, curr) => acc + curr.amount, 0);
  },
  accountInfo: function () {
    return `firstName:${this.firstName}, lastName:${this.lastName}, incomes:${this.totalIncome()}, expenses:${this.totalExpense()}`;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};
personAccount.addIncome("salary", 100);
personAccount.addExpense("rent", 900);
personAccount.addExpense("food", 100);
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());