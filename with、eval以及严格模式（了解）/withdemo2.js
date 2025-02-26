var obj = {
  name: "小余",
  age: 18,
};
var obj2 = {
  name: "coderwhy",
  age: 35,
};
with (obj) {
  //会形成自己的作用域
  console.log(name); //小余
  console.log(age); //18
}
with (obj2) {
  //会形成自己的作用域
  console.log(name); //coderwhy
  console.log(age); //35
}
