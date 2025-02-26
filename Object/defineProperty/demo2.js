// 第一次定义属性
Object.defineProperty(user, "secretKey", {
  value: "abc123",
  enumerable: false,
});

// 尝试覆盖配置（将失败）
try {
  Object.defineProperty(user, "secretKey", {
    enumerable: true, // 抛出 TypeError，因为默认 configurable 为 false
  });
} catch (e) {
  console.error("修改失败:", e.message);
}

// 正确覆盖方式（需 configurable 为 true）
Object.defineProperty(user, "dynamicProp", {
  value: 1,
  configurable: true, // 允许后续配置修改
});

// 更新属性
Object.defineProperty(user, "dynamicProp", {
  writable: true, // 允许修改值
  value: 2, // 更新值
});
