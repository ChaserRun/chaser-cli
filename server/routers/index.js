const apis = require('./apis');

module.exports = function(app) {
  app.use('/api', apis);
};
