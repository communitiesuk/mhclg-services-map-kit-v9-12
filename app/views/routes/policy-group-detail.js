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

var policyGroup = [];
var nameOfService = [];
var numberOfService = [];
var endUser = [];
var directorateName = [];



console.log("live policy-group-detail.js data:\n");


for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);

    policyGroup.push(obj["records"][counter]["fields"]["Policy Group"]);
    nameOfService.push(obj["records"][counter]["fields"]["Service Name"]);
    endUser.push(obj["records"][counter]["fields"]["End User"]);

    counter++;

    numberOfService.push(counter)
    //req.session.data['serviceNames']['counter'] = serviceNames[counter];
}




const gs = require('fs');
const directoratefileLocation = './app/views/data/directorate-data.json';

let directoraterawdata = gs.readFileSync(directoratefileLocation);
//console.log(JSONdata);

// Converting JSON object to JS object
var directorateobj = JSON.parse(directoraterawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var y;
counter = 0;

var groupID = [];
var groupName = [];

console.log("live policy-groups.js data:\n");


for (y of directorateobj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  groupID.push(directorateobj["records"][counter]["id"]);
  groupName.push(directorateobj["records"][counter]["fields"]["Name"]);


  //console.log("\n\ngroupID MEGA MEGA MEGA MEGA MEGA: " + groupID[counter] + groupName[counter]);

  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}








router.get('/policy-group-detail', function (req, res) {

  // Get the directorate name from the diretorate ID

  directorateID = req.session.data['directorateID'];

  var t = 0;

  // loop through the groupNames and find a match for the

  for (t in groupName) {

    console.log(t + " " + groupName[t] + " \n");

    if (groupID[t] == directorateID) {

      //console.log(t + " " + directorateName + " " + groupName[t] + " \n");
      directorateName = groupName[t];
    }

  }

  // End sort name of directorate


  var s = 0;
  var directorateServices = [];
  var directorateServicesID = [];


  for (s in nameOfService) {

    if (policyGroup[s] == directorateID) {
      directorateServices.push(nameOfService[s]);
      directorateServicesID.push(numberOfService[s]);

    }

  }



  res.render('policy-group-detail', {
    directorateName: directorateName,
    directorateID: directorateID,
    directorateServices: directorateServices,
    directorateServicesID: directorateServicesID

  })
})




}
