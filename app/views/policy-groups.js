module.exports = function (router) {


const fs = require('fs');
const fileLocation = './app/views/v4/data/policy-groups-data.json';

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

var groupID = [];
var groupName = [];

console.log("v4 policy-groups.js data:\n");


for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  groupID.push(obj["records"][counter]["id"]);
  groupName.push(obj["records"][counter]["fields"]["Name"]);

  console.log("\n\ngroupID: " + groupID[counter]);

  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

groupName.sort();


router.get('/v4/all-policy-groups', function (req, res) {


  res.render('v4/all-policy-groups', {
    groupName: groupName,
    groupID: groupID
  })
})




}
