const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target:
        "http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice",
      changeOrigin: true,
    })
  );
  //   app.use(
  //     proxy("/api", {
  //       target:
  //         "http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice", // 비즈니스 서버 URL 설정
  //       changeOrigin: true,
  //     })
  //   );
  //   app.use(
  //     createProxyMiddleware("/api", {
  //       target:
  //         "http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice",
  //       pathRewrite: { "^/api": "" },
  //       changeOrigin: true,
  //     })
  //   );
};
