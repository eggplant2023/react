const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        createProxyMiddleware( '/api',{
            target: "http://localhost:8080",
            changeOrigin: true,
        }),
    );
    app.use(
        createProxyMiddleware('predict',{
            target: "http://localhost:5000",
            changeOrigin: true,
        }),
    );
};