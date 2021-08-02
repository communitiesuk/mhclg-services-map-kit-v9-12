module.exports = function (router) {


const fs = require('fs');
const fileLocation = './app/views/v4/data/services-data.json';

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

var policyObjective = [];
var nameOfService = [];

console.log("v4 policy-objectives.js data:\n");


for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  policyObjective.push(obj["records"][counter]["fields"]["Policy Objective"]);
  nameOfService.push(obj["records"][counter]["fields"]["Service Name"]);

  console.log(counter + "   " + policyObjective[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}


// policyObjective.sort();

router.get('/v4/policy-objectives', function (req, res) {


  res.render('v4/policy-objectives', {
    policyObjective: policyObjective,
    nameOfService: nameOfService

  })
})




}
