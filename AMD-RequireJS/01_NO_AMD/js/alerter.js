// 定义一个有依赖的模块
(function (window, dataService) {
  let msg = "alerter";

  function showMsg() {
    return console.log(msg, dataService.getName());
  }

  window.alerter = { showMsg };
})(window, dataService);
