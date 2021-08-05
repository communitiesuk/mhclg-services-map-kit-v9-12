module.exports = function (router) {


// load service data

const fs = require('fs');
const servicesdatafileLocation = './app/views/data/services-data.json';

let servicesdata = fs.readFileSync(servicesdatafileLocation);
//console.log(JSONdata);

// Converting JSON object to JS object
var servicesobj = JSON.parse(servicesdata);

// test JSON by printing the service name of service "30"
//console.log("$$$$$ " + servicesobj["records"][30]["fields"]["Service Name"]);

var x;
var counter;
counter = 0;

var serviceID = [];
var namesOfServices = [];
var serviceProviderID = [];
var numberOfService = [];

console.log("live services-provider-detail.js data:\n");


for (x of servicesobj["records"]) {
  serviceID.push(servicesobj["records"][counter]["id"]);
  namesOfServices.push(servicesobj["records"][counter]["fields"]["Service Name"]);
  serviceProviderID.push(servicesobj["records"][counter]["fields"]["Service Provider"]);
  counter++;
  numberOfService.push(counter);

}



// load partners data

const gs = require('fs');
const providersdatafileLocation = './app/views/data/service-providers-data.json';

let providersdata = gs.readFileSync(providersdatafileLocation);
//console.log(JSONdata);

// Converting JSON object to JS object
var providersobj = JSON.parse(providersdata);

// test JSON by printing the service name of service "30"
//console.log("$$$$$ " + servicesobj["records"][30]["fields"]["Service Name"]);

var y;
counter = 0;

var providerID = [];
var providerName = [];


console.log("live services-provider-detail.js data:\n");


for (y of providersobj["records"]) {
  providerID.push(providersobj["records"][counter]["id"]);
  providerName.push(providersobj["records"][counter]["fields"]["Name"]);
  //console.log("providerName: " + providerName[counter] + "\n");
  counter++;

}




router.get('/service-provider-detail', function (req, res) {

  // Get provider name from the provided code

  var provider;
  provider = req.session.data['provider'];

  var z = 0;
  var namedProvider;
  counter = 0;


  for (z of providerID) {


    if (z == provider) {
      namedProvider = providerName[counter];
    }

    counter++;

  }


  // Make a list of services for this provider
  // Loop throuhg the services - if the provider matches this one, add to the list

  var a = 0;
  var b = 0;
  var providerServiceListName = [];
  counter = 0;

  for (a of namesOfServices) {

    for (b in serviceProviderID[counter]) {

    // console.log("**" + serviceProviderID[counter] + "** **" + provider + "**");
    console.log("b: " + b + "/n");
    console.log("serviceProviderID[counter][b]: " + serviceProviderID[counter][b] + "/n");
    if (serviceProviderID[counter][b] == provider) {

      providerServiceListName.push(namesOfServices[counter]);
      console.log("\n\nBINGO!!!!  \n\n");
    }

  }

    counter++;

  }


  res.render('service-provider-detail', {
    provider: provider,
    providerID: providerID,
    providerName: providerName,
    numberOfService: numberOfService,
    namedProvider: namedProvider,
    providerServiceListName: providerServiceListName

  })


})

}
