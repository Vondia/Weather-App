// next.config.js
const withLinaria = require('next-linaria');
module.exports = withLinaria({
    images: {
        domains: [
          'openweathermap.org'
        ]
      }
});
