module.exports = function (router) {

// ------- START import user data ---------

const gs = require('fs');
const usersfileLocation = './app/views/v2/end-users-data.json';

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

console.log("v2 end-users.js data:\n");


for (x of usersobj["records"]) {
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  userName.push(usersobj["records"][counter]["fields"]["Name"]);

  console.log(counter + "   " + userName[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

// ------- END import user data ---------


router.get('/v2/end-users', function (req, res) {


  res.render('v2/end-users', {
    userName: userName
  })
})




}
