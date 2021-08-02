module.exports = function (router) {


const fs = require('fs');
const outcomesfileLocation = './app/views/v4/data/priority-outcomes.json';

let rawoutcomesdata = fs.readFileSync(outcomesfileLocation);
//let JSONdata = JSON.parse(rawoutcomesdata);
//console.log(JSONdata);

// Converting JSON object to JS object
var outcomesobj = JSON.parse(rawoutcomesdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var x;
var counter;
counter = 0;

var priorityOutcome = [];
var outcomeDirectorates = [];

console.log("v4 priorities-outcomes.js data:\n");


for (x of outcomesobj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  priorityOutcome.push(outcomesobj["records"][counter]["fields"]["Priority Outcome"]);
  outcomeDirectorates.push(outcomesobj["records"][counter]["fields"]["Directorate"]);
  counter++;
}


// load service data

const gs = require('fs');
const servicesdatafileLocation = './app/views/v4/data/services-data.json';

let servicesdata = gs.readFileSync(servicesdatafileLocation);
//let JSONdata = JSON.parse(servicesdata);
//console.log(JSONdata);

// Converting JSON object to JS object
var servicesobj = JSON.parse(servicesdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var y;
var counter;
counter = 0;

var serviceID = [];
var nameOfService = [];
var policyGroup = [];

console.log("v4 priorities-outcomes.js data:\n");


for (y of servicesobj["records"]) {
  serviceID.push(servicesobj["records"][counter]["id"]);
  nameOfService.push(servicesobj["records"][counter]["fields"]["Service Name"]);
  policyGroup.push(servicesobj["records"][counter]["fields"]["Policy Group"]);
  counter++;
}


// check through list of services and replace database codes with actual names


  //numberOfService.length = 0;
  var a;
  var b;
  var directorateServices = [];
  var priorityServices = [];
  priorityServices[0] = "dave,frank";

  console.log("RUNNING \n");

  for (var i in outcomeDirectorates) {

    console.log("outcomeDirectorates = " + outcomeDirectorates);


     for (var j in outcomeDirectorates[i]) {

       console.log("outcomeDirectorates[i] = " + outcomeDirectorates[i] + "\n");
       console.log("outcomeDirectorates[i][0] = " + outcomeDirectorates[i][0] + "\n");
       console.log("nameOfService = " + nameOfService + "\n");

       for (var k in nameOfService) {

         console.log("SHAZAM \n");
         console.log("policyGroup[k] = " + policyGroup[k] + " \n");
         console.log("nameOfService[k] = " + nameOfService[k] + " \n");
         console.log("outcomeDirectorates[i][j] = " + outcomeDirectorates[i][j] + " \n");
         console.log("i = " + i + "   j = " + j + " \n");
         //console.log("directorateServices[i][j] = " + directorateServices[i][j] + " \n");

        if (policyGroup[k] == outcomeDirectorates[i][j]) {
              console.log("********* YEEEEEESSSSS *********  \n");
              //directorateServices[i][j] = " ";
              //priorityServices[i].push(nameOfService[k]);
              //priorityServices[i] = (nameOfService[k]);
              console.log("PING!  \n");
              //console.log("directorateServices[i][j] = " + directorateServices[i][j]);
        }

      }

      }

    }

console.log("directorateServices = " + directorateServices + " \n");



// the actual page bit

router.get('/v4/priority-outcomes', function (req, res) {

  res.render('v4/priority-outcomes', {
    priorityOutcome: priorityOutcome,
    outcomeDirectorates: outcomeDirectorates,
    directorateServices: directorateServices,
    serviceID: serviceID,
    nameOfService: nameOfService
  })
})


}
