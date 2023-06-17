const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/clientes',
    createProxyMiddleware({
      target: 'http://localhost:32831',
      changeOrigin: true,
    })
  );
};