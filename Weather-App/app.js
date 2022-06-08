/** @format */

const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=0d614b4dd33f8407a2ed40849487087a&query=19.210420854829472,%2072.85190830924196';
request(url, (error, response, body) => {
  console.log(error);
  //   console.log(response);
  //   console.log(response.statusCode);
  const data = JSON.parse(response.body);
  console.log(data.current);
});
