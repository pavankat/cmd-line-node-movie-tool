var request = require('request');

console.log(process.argv[2]);

var urlHit = "http://www.omdbapi.com/?t=" + process.argv[2] + "&y=&plot=full&tomatoes=true&r=json"

request(urlHit, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})