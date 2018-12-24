const debug = require('debug')('index');

module.exports = () => {
  const nodes = process.argv[2];
  debug(`nodes: $${nodes}`);
};
