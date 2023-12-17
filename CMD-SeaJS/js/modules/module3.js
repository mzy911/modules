define(function (require, exports, module) {
  let name = "module3";
  function getName() {
    return name;
  }

  // 暴露模块
  module.exports = { getName };
});
