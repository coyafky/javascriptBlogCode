/**
 * 题目：确定给定角度的类型
 * 
 * 编写一个 JavaScript 程序，确定给定角度的类型。
 * 
 * 角度类型：
 * 1. 锐角：0到90度之间的角（不包括90度）
 * 2. 直角：90度角
 * 3. 钝角：90到180度之间的角（不包括90度和180度）
 * 4. 平角：180度角
 * 
 * @param {number} angle - 要确定类型的角度（单位：度）
 * @returns {string} - 角度类型，如果输入无效则返回 "Invalid input"
 */
function findAngleType(angle) {
    // 检查输入是否为数字
    if (typeof angle !== 'number' || isNaN(angle)) {
      return "Invalid input";
    }
  
    // 将角度限制在0到360度之间
    angle = angle % 360;
    if (angle < 0) {
      angle += 360;
    }
  
    // 确定角度类型
    if (angle === 0 || angle === 360) {
      return "零角";
    } else if (angle > 0 && angle < 90) {
      return "锐角";
    } else if (angle === 90) {
      return "直角";
    } else if (angle > 90 && angle < 180) {
      return "钝角";
    } else if (angle === 180) {
      return "平角";
    } else {
      return "优角"; // 大于180度小于360度的角
    }
  }
  
  // 测试函数
  function testFindAngleType() {
    console.log(findAngleType(45));    // 预期输出: "锐角"
    console.log(findAngleType(90));    // 预期输出: "直角"
    console.log(findAngleType(135));   // 预期输出: "钝角"
    console.log(findAngleType(180));   // 预期输出: "平角"
    console.log(findAngleType(0));     // 预期输出: "零角"
    console.log(findAngleType(360));   // 预期输出: "零角"
    console.log(findAngleType(270));   // 预期输出: "优角"
    console.log(findAngleType(-45));   // 预期输出: "锐角"
    console.log(findAngleType(450));   // 预期输出: "锐角"
    console.log(findAngleType(89.9));  // 预期输出: "锐角"
    console.log(findAngleType(90.1));  // 预期输出: "钝角"
    console.log(findAngleType("45"));  // 预期输出: "Invalid input"
    console.log(findAngleType(null));  // 预期输出: "Invalid input"
    console.log(findAngleType(NaN));   // 预期输出: "Invalid input"
  }
  
  // 运行测试
  testFindAngleType();
  