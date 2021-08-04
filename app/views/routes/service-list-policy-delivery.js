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

var numberOfService = [];
var x;
var counter;
counter = 0;

var nameOfService = [];
var roleOfMHCLG = [];


//console.log("live service-list-policy-delivery.js data:\n");


for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  nameOfService.push(obj["records"][counter]["fields"]["Service Name"]);
  roleOfMHCLG.push(obj["records"][counter]["fields"]["Role of MHCLG"]);

  //console.log(counter + "   " + nameOfService[counter]);
  //console.log("       " + roleOfMHCLG[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}




router.get('/service-list-policy-delivery', function (req, res) {


  //nameOfService.sort();

  numberOfService.length = 0;
  var x;
  var y;
  var matchingService = [];
  var count = 0;

  for (var i in roleOfMHCLG)
  {
    var policyCheck = 0;
    var deliveryCheck = 0;

     // console.log("row " + i);
     for (var j in roleOfMHCLG[i])
       {



        console.log("     " + roleOfMHCLG[i][j]);

        if (roleOfMHCLG[i][j].includes('Delivery')) {

            deliveryCheck = 1;
            // console.log("          DELVIRY!" + " POL: " + policyCheck + " DEL: " + deliveryCheck);
        }

        if (roleOfMHCLG[i][j].includes('Policy')) {

            policyCheck = 1;
            // console.log("          POLICY!" + " POL: " + policyCheck + " DEL: " + deliveryCheck);
        }

        if (policyCheck === 1 && deliveryCheck === 1) {



          // console.log("**** YYYAAAASSSS! ****");


          y = parseInt(i) + 1;
          numberOfService.push(y);
          matchingService.push(nameOfService[i]);
          count++;

          policyCheck = 0;
          deliveryCheck = 0;

        }

       }
  }


//


  res.render('service-list-policy-delivery', {
    matchingService: matchingService,
    numberOfService: numberOfService
  })


})



}
