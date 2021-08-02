module.exports = function (router) {


// load service data

const fs = require('fs');
const servicesdatafileLocation = './app/views/v4/data/services-data.json';

let servicesdata = fs.readFileSync(servicesdatafileLocation);
//console.log(JSONdata);

// Converting JSON object to JS object
var obj = JSON.parse(servicesdata);

// test JSON by printing the service name of service "30"
//console.log("$$$$$ " + servicesobj["records"][30]["fields"]["Service Name"]);

var x;
var kounter;
kounter = 0;

var serviceID = [];
var namesOfService = [];
var serviceProviderID = [];

console.log("v4 services-provider-detail.js data:\n");


for (x of obj["records"]) {
  serviceID.push(obj["records"][kounter]["id"]);
  namesOfService.push(obj["records"][kounter]["fields"]["Service Name"]);
  serviceProviderID.push(obj["records"][kounter]["fields"]["Service Provider"]);
  kounter++;

  //console.log("FRANK namesOfService[" + kounter + "] = " + namesOfService[kounter] + " \n");

  //console.log("!!!!!!!!! serviceProviderID[" + kounter + "] = " + serviceID[kounter] + " \n");
}





router.get('/v4/service-provider-detail', function (req, res) {

  var providerID;
  var providerName;
  var listOfServices = [];
  var numberOfService = [];

  providerID = req.session.data['providerID'];
  providerName = req.session.data['providerName'];

  //console.log("providerName = " + providerName + "\n");
  //console.log("providerID = " + providerID + "\n");

  // need to run through and match the services against the intended

  var count = 0;

  for (var i in namesOfService) {

    console.log("count = " + count + " \n");

    console.log("ARSE namesOfService[count] = " + namesOfService[count] + " \n");

    console.log("ENOR " + serviceProviderID[count] + "    " + providerID + "\n");


      if (serviceProviderID[count].includes(providerID)) {

        console.log("ENOR " + serviceProviderID[count] + "    " + providerID + "\n");
        listOfServices.push(namesOfService[count]);
        numberOfService.push(count);

        //listOfServices.push(namesOfService[count]);
        //console.log("MATCH! \n");

      }

      count++;

  }



  // end of that run through


  res.render('v4/service-provider-detail', {
    providerID: providerID,
    providerName: providerName,
    numberOfService: numberOfService,
    listOfServices: listOfServices,

  })


})

}
