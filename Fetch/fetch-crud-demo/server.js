const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

app.post("/users", (req, res) => {
  console.log("Received data:", req.body); // 添加这行来调试
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get("/users", (req, res) => {
  console.log("Sending users:", users); // 添加这行来调试
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id); // 获取用户 ID，转化为整数
  const user = users.find((user) => user.id === userId); // 根据 ID 查找用户
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id); // 获取用户 ID，转化为整数
  const user = users.find((user) => user.id === userId); // 根据 ID 查找用户
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id); // 获取用户 ID，转化为整数
  const userIndex = users.findIndex((user) => user.id === userId); // 根据 ID 查找用户
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
