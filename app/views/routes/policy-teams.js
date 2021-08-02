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

var policyTeam = [];

console.log("\n\nlive policy-teams.js data:\n");


for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);

    policyTeam.push(obj["records"][counter]["fields"]["Policy Team"]);
    console.log(counter + "   " + policyTeam[counter]);


    //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}


// sort array
policyTeam.sort();

// const newpolicyTeam = Array.from(new Set(policyTeam))

var tick = 0;
var ticktick = 1;
var checkOne = "";
var checkTwo = "";

for (z of policyTeam) {

  checkOne = policyTeam[tick];
  checkTwo = policyTeam[ticktick];



// checkOne = checkOne.replace(/^\s+|\s+$/g, '');

  console.log ("pT " + tick + " " + checkOne + "   pT " + ticktick + " " + checkTwo);
  console.log("'" + checkOne + "'");
  console.log("'" + checkTwo  + "'");
  console.log("****\n\n");



  if (checkOne === checkTwo) {
    console.log ("****** RUUNNNNNNIINNNNGGG ******");
    policyTeam[tick] = "";
  }

  var tick = tick + 1;
  var ticktick = ticktick + 1;


}



// remove blanks
policyTeam = policyTeam.filter(item => item);







// page rendering

router.get('/policy-teams', function (req, res) {

  for (var i in checkOne)
  {


  console.log("row " + i);
  for (var j in checkOne[i])
    {
     console.log("     " + checkOne[i][j]);
    }

}


if ( policyTeam[0] = policyTeam[1]) {

  console.log(" -------> SNAP!");

}



  res.render('policy-teams', {
    policyTeam: policyTeam
  })
})




}
