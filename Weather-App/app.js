/** @format */

const request = require('postman-request');

//units f s m
const a1 = process.argv[2];
const a2 = process.argv[3];
const a3 = process.argv[4];
const a4 = process.argv[5];

var lat;
var long;

const forwardUrl = `http://api.positionstack.com/v1/forward?access_key=4ca2b035da27f53160a213021efc773c&query=${a1},${a2},${a3},${a4}`;

request(forwardUrl, (error, response) => {
  //   console.log(error);
  //   console.log(response.body);
  const data = JSON.parse(response.body);
  lat = data.data[0].latitude;
  long = data.data[0].longitude;
  console.log(lat);
  console.log(long);
});

// console.log('url : : : : ', forwardUrl);

// console.log(a1, 'this is args2');
// console.log(a2, 'this is args3');
// console.log(a3, 'this is args4');
// console.log(a4, 'this is args5');

const url = `http://api.weatherstack.com/current?access_key=0d614b4dd33f8407a2ed40849487087a&query=${lat},${long}&units=m`;
request(url, (error, response) => {
  console.log(error);
  //   console.log(response);
  //   console.log(response.statusCode);
  const data = JSON.parse(response.body);
  console.log(data);
  console.log(data.current.temperature);
  console.log(data.current.feelslike);
  console.log(data.current.weather_descriptions);
  console
    .log
    // `current temperature is ${data.current.temperature} feels like ${data.current.feelslike} current conditions are like ${data.current.weather_descriptions}`
    ();
});
