module.exports = function (router) {


const fs = require('fs');
const fileLocation = './app/views/data/services-data.json';

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




console.log("live policy-team-services.js data:\n");




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


// ------- END import services data ---------


// ------- START import user data ---------

const gs = require('fs');
const usersfileLocation = './app/views/data/end-users-data.json';

let usersrawdata = gs.readFileSync(usersfileLocation);
//console.log(JSONdata);

// Converting JSON object to JS object
var usersobj = JSON.parse(usersrawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var x;
var counter;
counter = 0;

var userName = [];
var userNameID = [];

console.log("live policy-team-services.js data:\n");


for (x of usersobj["records"]) {
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  userName.push(usersobj["records"][counter]["fields"]["Name"]);
  userNameID.push(usersobj["records"][counter]["id"]);

  //console.log(counter + "   " + userName[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

// ------- END import user data ---------



router.get('/policy-team-services', function (req, res) {

  focusTeam = req.session.data['focusTeam'];

  if (!focusTeam) {



  }



  console.log("focusTeam is: " + focusTeam + "\n\n");

  policyTeamServiceName.length = 0;
  numberOfService.length = 0;
  var x;
  var y;
  var i = 0;
  for (x in policyTeam) {

      if (policyTeam[x] == focusTeam) {

        console.log("MATCH! \n");

        y = parseInt(x) + 1;
        numberOfService.push(y);
        policyTeamServiceName[i] = nameOfService[x];
        policyTeamUsers[i] = endUser[x];

        console.log("policyTeamServiceName " + i + " :: " + policyTeamServiceName[i]);
        console.log("policyTeamUsers " + i + " :: " + policyTeamUsers[i] + "\n\n");


        i++;

      }

  }

  var s = 0;
  var t = 0;
  for (s in policyTeamUsers) {

    console.log("policyTeamUsers " + s + "   " + policyTeamUsers[s]);

    for (t in userNameID) {

      console.log("   userNameID " + t + "   " + userNameID[t]);

      if (policyTeamUsers[s] == userNameID[t]) {

        console.log("MATCH! \n");
        policyTeamUsers[s] = userName[t];
        console.log("     changed endUser " + numberOfService + " " + s + " = " + policyTeamUsers[s]);

      }

    }

  }

  res.render('policy-team-services', {
    focusTeam: focusTeam,
    policyTeamServiceName: policyTeamServiceName,
    policyTeamUsers: policyTeamUsers,
    numberOfService: numberOfService
  })
})




}
