module.exports = {
    "extends": "airbnb-base",
    "env": {
    "mocha": true
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    "no-console": 0,
    "mocha/no-exclusive-tests": "error"
  }
};
