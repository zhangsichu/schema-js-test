const functions = require('../functions/index');
const chai = require('chai');
const fs = require('fs');

chai.use(require('chai-ajv-json-schema'));

describe('Retrieve price list', () => {
  before(() => {
    // https://jsonschema.net/
    const weather = JSON.parse(fs.readFileSync(`${__dirname}/schema/weather.json`));
    chai.ajv.addSchema(weather, 'weather');
  });

  after(() => chai.ajv.removeSchema('weather'));


  it('should return weather data with correct schema', (done) => {
    functions.getWeather().then((response) => {
      console.log(response);
      chai.expect(response).to.validWithSchema('weather');
      done();
    });
  });
});
