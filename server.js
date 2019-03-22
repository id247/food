require('dotenv').config();
const proxy = require('express-http-proxy');
const app = require('express')();

const token = process.env.API_TOKEN;
const port = process.env.API_PORT || 3001;

if (!token) {
  console.error("You did not specify acces token, this app won't work");
} else {
  app.use(
    '/',
    proxy('https://graph.whisk.com/', {
      proxyReqOptDecorator: function(proxyReqOpts) {
        proxyReqOpts.headers['Accept'] = 'application/json';
        proxyReqOpts.headers['Authorization'] = `Token ${token}`;
        return proxyReqOpts;
      }
    })
  );

  app.listen(port, () => console.log(`Proxy listening on port ${port}!`));
}
