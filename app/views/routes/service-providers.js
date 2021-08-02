module.exports = function (router) {


const fs = require('fs');
const fileLocation = './app/views/data/service-providers.json';

let rawdata = fs.readFileSync(fileLocation);
let JSONdata = JSON.parse(rawdata);
//console.log(JSONdata);

// Converting JSON object to JS object
var obj = JSON.parse(rawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var numberOfService = "";
var x;
var counter;
counter = 0;

var providerID = [];
var providerName = [];

// console.log("v4 service-providers.js data:\n");


for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  providerID.push(obj["records"][counter]["id"]);
  providerName.push(obj["records"][counter]["fields"]["Name"]);

  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}




router.get('/service-providers', function (req, res) {

  providerName.sort();

  res.render('service-providers', {
    providerID: providerID,
    providerName: providerName
  })

})



}
