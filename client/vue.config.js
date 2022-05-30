// base url sestting

module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:8800",
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
