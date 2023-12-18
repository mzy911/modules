"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一暴露
function fun() {
  console.log("module2 fun");
}

function fun1() {
  console.log("module2 fun1");
}

exports.fun = fun;
exports.fun1 = fun1;