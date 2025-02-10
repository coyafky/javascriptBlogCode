// Convert JSON to JS
const path = require("path");
const fs = require("fs");

const jsonPath = path.join(__dirname, "Basic.json");
const json = fs.readFileSync(jsonPath, "utf-8");
// console.log(json);
const data = JSON.parse(json);

console.log(data);
// console.log(data.length);

console.log(data.Alex);

// Convert JS to JSON
const dataString = JSON.stringify(data);
// console.log(dataString);

// Convert JS to JSON with 4 spaces indentation
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`;

const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);

const filteredUsers = JSON.stringify(usersObj, ["firstName", "lastName", "age"], 4);
console.log(filteredUsers);
