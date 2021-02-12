module.exports = function (router) {


const fs = require('fs');
const fileLocation = './app/views/v2/end-users-data.json';

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

var userName = [];

console.log("v2 end-users.js data:\n");


for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  userName.push(obj["records"][counter]["fields"]["Name"]);

  console.log(counter + "   " + userName[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}




router.get('/v2/end-users', function (req, res) {


  res.render('v2/end-users', {
    userName: userName
  })
})




}
