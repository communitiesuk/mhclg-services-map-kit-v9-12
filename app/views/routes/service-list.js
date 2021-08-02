module.exports = function (router) {


  const fs = require('fs');
  const fileLocation = './app/views/data/services-data.json';

let rawdata = fs.readFileSync(fileLocation);
// let JSONdata = JSON.parse(rawdata);
// console.log(JSONdata);

// Converting JSON object to JS object
var obj = JSON.parse(rawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);


var numberOfService = [];
var x;
var counter;
counter = 0;

var nameOfService = [];



for (x of obj["records"]) {
  nameOfService.push(obj["records"][counter]["fields"]["Service Name"]);
  counter++;
}







router.get('/service-list', function (req, res) {


  //nameOfService.sort();

  numberOfService.length = 0;
  var x;
  var y;
  for (x in nameOfService) {

        y = parseInt(x) + 1;
        numberOfService.push(y);

    }

  res.render('service-list', {
    nameOfService: nameOfService,
    numberOfService: numberOfService
  })


})



}
