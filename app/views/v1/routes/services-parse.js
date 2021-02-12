module.exports = function (router) {


const fs = require('fs');
const fileLocation = './app/views/v1/all-mhclg-services.json';

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

for (x of obj["entry"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  namesOfService.push(obj["entry"][counter]["title"]);

  console.log(counter + "   " + namesOfService[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}


}
