// 统一暴露
function fun() {
  console.log("module2 fun");
}

function fun1() {
  console.log("module2 fun1");
}

export { fun, fun1 };
