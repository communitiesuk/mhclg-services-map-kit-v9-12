module.exports = function (router) {


const gs = require('fs');
const servicesfileLocation = './app/views/v4/data/services-data.json';

let servicesrawdata = gs.readFileSync(servicesfileLocation);
//let JSONdata = JSON.parse(userrawdata);
//console.log(JSONdata);

// Converting JSON object to JS object
var servicesobj = JSON.parse(servicesrawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var x;
var counter;
counter = 0;

var endUserNeeds = [];

console.log("v4 end-user-needs.js data:\n");


for (x of servicesobj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  endUserNeeds.push(servicesobj["records"][counter]["fields"]["End User Need"]);

  console.log(counter + "   " + endUserNeeds[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

endUserNeeds.sort();


router.get('/v4/end-user-needs-list', function (req, res) {


  res.render('v4/end-user-needs-list', {
    endUserNeeds: endUserNeeds
  })
})




}
