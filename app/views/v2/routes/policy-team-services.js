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

var focusTeam;
var policyTeam = [];
var nameOfService = [];
var numberOfService = [];
var policyTeamServiceName = [];
var endUser = [];
var policyTeamUsers = [];




console.log("v2 policy-team-services.js data:\n");




for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);

    policyTeam.push(obj["records"][counter]["fields"]["Policy Team"]);
    nameOfService.push(obj["records"][counter]["fields"]["Service Name"]);
    endUser.push(obj["records"][counter]["fields"]["End User"]);


    console.log(counter + "   Policy team: " + policyTeam[counter] + "   Service name: " + nameOfService[counter]);


    //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}


// const newpolicyTeam = Array.from(new Set(policyTeam))

// policyTeam.sort();



router.get('/v2/policy-team-services', function (req, res) {

  focusTeam = req.session.data['focusTeam'];

  if (!focusTeam) {



  }

  console.log("focusTeam is: " + focusTeam + "\n\n");

  policyTeamServiceName.length = 0;
  numberOfService.length = 0;
  var x;
  var y;
  for (x in policyTeam) {

      if (policyTeam[x] == focusTeam) {

        console.log("MATCH! \n");

        y = parseInt(x) + 1;
        numberOfService.push(y);
        policyTeamServiceName.push(nameOfService[x]);
        policyTeamUsers.push(endUser[x]);

      }

  }

  res.render('v2/policy-team-services', {
    focusTeam: focusTeam,
    policyTeamServiceName: policyTeamServiceName,
    policyTeamUsers: policyTeamUsers,
    numberOfService: numberOfService
  })
})




}
