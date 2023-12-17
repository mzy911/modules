define(function (require, exports, module) {
  let name = "module4";
  function getName() {
    return name;
  }

  // 同步引入 module2
  let module2 = require("./module2");
  console.log(module2.getName());

  // 异步引入 module3
  require.async("./module3", function (module3) {
    console.log(module3.getName());
  });

  // 暴露模块
  module.exports = { getName };
});
