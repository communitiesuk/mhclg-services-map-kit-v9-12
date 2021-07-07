module.exports = function (router) {


const fs = require('fs');
const fileLocation = './app/views/v4/data/priority-outcomes.json';

let rawoutcomesdata = fs.readFileSync(fileLocation);
let JSONdata = JSON.parse(rawoutcomesdata);
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

// policyObjective.sort();

router.get('/v4/priority-outcomes', function (req, res) {

  res.render('v4/priority-outcomes', {
    priorityOutcome: priorityOutcome,
    outcomeDirectorates: outcomeDirectorates
  })
})


}
