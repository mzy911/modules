define(function (require, exports, module) {
  let module1 = require("./module1.js");
  console.log(module1.getName());

  let module4 = require("./module4.js");
  console.log(module4.getName());
});
