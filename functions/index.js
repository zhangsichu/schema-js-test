const request = require('request-promise');

const getWeather = () => request(
  { uri: 'http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1',
    json: true });


module.exports = {
  getWeather,
};
