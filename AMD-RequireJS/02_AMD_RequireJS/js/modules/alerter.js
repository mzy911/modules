// 定义一个有依赖的模块：引入 dataService 模块
define("alerter", ["dataService", "jquery"], function (dataService, $) {
  let msg = "alerter";

  function showMsg() {
    $("body").css("background", "red");
    console.log(msg, dataService.getName());
  }

  // 暴露模块
  return { showMsg };
});
