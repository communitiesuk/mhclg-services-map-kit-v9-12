module.exports = function (router) {


const fs = require('fs');
const fileLocation = './app/views/v1/services-data.json';

let rawdata = fs.readFileSync(fileLocation);
let JSONdata = JSON.parse(rawdata);
//console.log(JSONdata);

// Converting JSON object to JS object
var obj = JSON.parse(rawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);


var x;
var counter;
counter = 0;
let namesOfService = [''];

console.log("These console outputs from services-list.js");

for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  namesOfService.push(obj["records"][counter]["fields"]["Service Name"]);

  console.log(counter + "   " + namesOfService[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

console.log("Test::: " + namesOfService[30]);

// Access the Airtable document

// require('./airtable')(router);

// Add your routes here - above the module.exports line

var totalNumberOfServices = counter;

router.get('/v1/index', function (req, res) {
  res.render('v1/index', {
    nameOfService: namesOfService[30],
    totalNumberOfServices: totalNumberOfServices
   })
})


}
