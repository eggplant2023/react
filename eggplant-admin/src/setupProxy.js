const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        createProxyMiddleware( '/api',{
            target: "http://52.78.130.186:8080",
            changeOrigin: true,
        }),
    );
};