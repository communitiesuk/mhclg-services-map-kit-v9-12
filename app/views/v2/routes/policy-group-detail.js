module.exports = function (router) {


const fs = require('fs');
const fileLocation = './app/views/v2/services-data.json';

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

var groupID;
var policyTeam = [];
var nameOfService = [];
var numberOfService = [];
var policyTeamServiceName = [];
var endUser = [];
var policyTeamUsers = [];




console.log("v2 policy-group-detail.js data:\n");




for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);

    policyTeam.push(obj["records"][counter]["fields"]["Policy Team"]);
    nameOfService.push(obj["records"][counter]["fields"]["Service Name"]);
    endUser.push(obj["records"][counter]["fields"]["End User"]);


    //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}


// const newpolicyTeam = Array.from(new Set(policyTeam))

// policyTeam.sort();



router.get('/v2/policy-group-detail', function (req, res) {

  groupID = req.session.data['groupID'];
  groupName = req.session.data['groupName'];



  res.render('v2/policy-group-detail', {
    groupID: groupID,
    groupName: groupName
  })
})




}
