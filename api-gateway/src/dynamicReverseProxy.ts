import { createProxyMiddleware } from 'http-proxy-middleware'

const dynamicReverseProxy = (req, res, next) => {
    const ssl = req.headers.secure ? 'https': 'http'
    const hostname = req.headers.target_host
    const port = req.headers.target_port
    const dynamicUrl = `${ssl}://${hostname}${!req.headers.secure ? ':'+port :''}`
    req.originalUrl = req.headers.target_path;
    // const dynamicUrl = 'http://localhost:4001'
    const proxyMiddleware = createProxyMiddleware({
      target: dynamicUrl,
      changeOrigin: true,
      xfwd: true,
      onProxyReq: (proxyReq, req) => {
        if (req.body) {
          const bodyData = JSON.stringify(req.body);
          proxyReq.setHeader('Content-Type', 'application/json');
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
          proxyReq.write(bodyData);
        }
      },
    });
    // Invoke the proxy middleware
    proxyMiddleware(req, res, next);
  };

  export default dynamicReverseProxy