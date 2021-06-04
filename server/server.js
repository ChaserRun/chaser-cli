const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const routers = require('./routers');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
/**
 * Node.js cookie parsing middleware.
 */
 app.use(cookieParser());
/**
 * Node.js body parsing middleware.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routers(app);

app.listen(60325, '127.0.0.1', function () {
  console.log('Example app listening on port 60325!');
});