// base url sestting

module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "https://lianghj.top:8888/api/private/v1",
          ws: true,
          changrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      },
    },
  },
};
