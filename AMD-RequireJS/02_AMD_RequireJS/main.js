(function () {
  require.config({
    baseUrl: "js/", // 可以指定base路径
    paths: {
      alerter: "modules/alerter", // js/modules/alerter
      dataService: "modules/dataService", // js/modules/dataService
      // jquery 天然支持 AMD 规范，内部定义了  define( "jquery"...
      // if ( typeof define === "function" && define.amd ) {
      //   define( "jquery", [], function() {
      //     return jQuery;
      //   } );
      // }
      jquery: "libs/jquery.min", // js/modules/dataService
    },
  });

  // 引入 alerter 模块
  require(["alerter"], function (alerter) {
    alerter.showMsg();
  });
})();
