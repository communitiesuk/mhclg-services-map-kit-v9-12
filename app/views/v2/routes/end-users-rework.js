module.exports = function (router) {


const usersfs = require('fs');
const fileLocation = './app/views/v2/end-users-data.json';

let userrawdata = usersfs.readFileSync(fileLocation);
let usersJSONdata = JSON.parse(userrawdata);
//console.log(usersJSONdata);

// Converting JSON object to JS object
var objusers = JSON.parse(userrawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var x;
var counter;
counter = 0;

var endUserNeeds = [];

console.log("v2 end-user-needs.js data:\n");


for (x of objusers["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + ObjUsers["records"][counter]["fields"]["Service Name"]);
  endUserNeeds.push(objusers["records"][counter]["fields"]["End User Need"]);

  console.log(counter + "   " + endUserNeeds[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

endUserNeeds.sort();


router.get('/v2/end-user-needs-list', function (req, res) {


  res.render('v2/end-user-needs-list', {
    endUserNeeds: endUserNeeds
  })
})




}
