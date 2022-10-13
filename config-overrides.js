const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@UIKit': 'src/UIKit',
    '@App': 'src/App',
    '@features': 'src/features',
    '@router': 'src/router',
    '@store': 'src/store',
    // '@': 'src/',
    // '@': 'src/',
    // '@': 'src/',
    // '@': 'src/',
  })(config);

  return config;
};
