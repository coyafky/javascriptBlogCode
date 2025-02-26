const user = { name: "Alice" };

Object.defineProperty(user, "id", {
  value: "U-123", // 初始值
  writable: false, // 不可修改
  configurable: false, // 不可删除或重新配置
  enumerable: true, // 出现在 Object.keys 中
});

console.log(Object.keys(user)); // ['name', 'id']
user.id = "新ID"; // 非严格模式静默失败，严格模式报错
delete user.id; // 操作无效且静默失败
