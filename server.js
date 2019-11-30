const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/Angular-Wather-App'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/Angular-Wather-App/index.html'));
});

// default Heroku port
let port = process.env.PORT || 5000
app.listen(port);

// Heroku automagically gives us SSL
// Lets write some middleware to redirect us
let env = process.env.NODE_ENV || 'development';

let forceSSL = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

if (env === 'production') {
  app.use(forceSSL);
}

console.log(`server run on ` + port)