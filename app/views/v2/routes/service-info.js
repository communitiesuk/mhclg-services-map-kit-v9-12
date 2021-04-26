module.exports = function (router) {


// ------- START import services data ---------

const fs = require('fs');
const fileLocation = './app/views/v2/services-data.json';

let rawdata = fs.readFileSync(fileLocation);
//console.log(JSONdata);

// Converting JSON object to JS object
var obj = JSON.parse(rawdata);

// test JSON by printing the service name of service "30"
// console.log(obj["records"][30]["fields"]["Service Name"]);

var numberOfService;
var x;
var counter;
counter = 0;

let nameOfService = [''];
let serviceDescription = [''];
let MHCLGInputDescription = [''];
let endUserNeeds = [''];
let serviceProvider = [''];
let roleOfMHCLG = [''];
let endUser = [''];
let serviceType = [''];
let serviceMaturity = [''];
let serviceStartDate = [''];
let serviceEndDate = [''];
let departmentalPriority = [''];
let policyPartners = [''];
let policyObjective = [''];
let policyTeam = [''];
let policyGroup = [''];
let FTE = [''];
let serviceBudget = [''];
let levelOfFunding = [''];
let fundName = [''];

console.log("v2 service-info.js data:\n");


for (x of obj["records"]) {
//  console.log(" ding... ");
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  nameOfService.push(obj["records"][counter]["fields"]["Service Name"]);
  serviceDescription.push(obj["records"][counter]["fields"]["Service description"]);
  MHCLGInputDescription.push(obj["records"][counter]["fields"]["MHCLG input description"]);
  endUserNeeds.push(obj["records"][counter]["fields"]["End User Need"]);
  serviceProvider.push(obj["records"][counter]["fields"]["Service Provider"]);
  roleOfMHCLG.push(obj["records"][counter]["fields"]["Role of MHCLG"]);
  endUser.push(obj["records"][counter]["fields"]["End User"]);
  serviceType.push(obj["records"][counter]["fields"]["Service Type"]);
  serviceMaturity.push(obj["records"][counter]["fields"]["Service Maturity"]);
  serviceStartDate.push(obj["records"][counter]["fields"]["Service Start Date"]);
  serviceEndDate.push(obj["records"][counter]["fields"]["Service End Date"]);
  departmentalPriority.push(obj["records"][counter]["fields"]["Departmental Priority"]);
  policyPartners.push(obj["records"][counter]["fields"]["Policy Partners"]);
  policyObjective.push(obj["records"][counter]["fields"]["Policy Objective"]);
  policyTeam.push(obj["records"][counter]["fields"]["Policy Team"]);
  policyGroup.push(obj["records"][counter]["fields"]["Policy Group"]);
  FTE.push(obj["records"][counter]["fields"]["FTE"]);
  serviceBudget.push(obj["records"][counter]["fields"]["Service budget"]);

  levelOfFunding.push(obj["records"][counter]["fields"]["Level of Funding"]);
  fundName.push(obj["records"][counter]["fields"]["Fund Name"]);

  console.log(counter + "   " + nameOfService[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

// ------- END import services data ---------


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
var userNameID = [];

console.log("v2 end-users.js data:\n");


for (x of usersobj["records"]) {
  //console.log(counter + ": " + obj["records"][counter]["fields"]["Service Name"]);
  userName.push(usersobj["records"][counter]["fields"]["Name"]);
  userNameID.push(usersobj["records"][counter]["id"]);

  //console.log(counter + "   " + userName[counter]);
  //req.session.data['serviceNames']['counter'] = serviceNames[counter];
  counter++;
}

// ------- END import user data ---------




router.get('/v2/service-info', function (req, res) {

  numberOfService = req.session.data['numberOfService'];
  console.log("number of service  " + numberOfService);
  console.log("service provider  " + serviceProvider);


  if (!numberOfService) {

    numberOfService = "3";

  };


  var s;
  var t;
  for (s in endUser[numberOfService]) {

    console.log("endUser " + s + "   " + endUser[s]);

    for (t in userNameID) {

      console.log("   userNameID " + t + "   " + userNameID[t]);

      if (endUser[numberOfService][s] == userNameID[t]) {

        console.log("MATCH! \n");
        endUser[numberOfService][s] = userName[t];
        console.log("     changed endUser " + numberOfService + " " + s + " = " + endUser[numberOfService][s]);

      }

    }

  }



  res.render('v2/service-info', {
    nameOfService: nameOfService[numberOfService],
    serviceDescription: serviceDescription[numberOfService],
    MHCLGInputDescription: MHCLGInputDescription[numberOfService],
    endUserNeeds: endUserNeeds[numberOfService],
    serviceProvider: serviceProvider[numberOfService],
    roleOfMHCLG: roleOfMHCLG[numberOfService],
    endUser: endUser[numberOfService],
    serviceType: serviceType[numberOfService],
    serviceMaturity: serviceMaturity[numberOfService],
    serviceStartDate: serviceStartDate[numberOfService],
    serviceEndDate: serviceEndDate[numberOfService],

    departmentalPriority: departmentalPriority[numberOfService],

    policyPartners: policyPartners[numberOfService],
    policyObjective: policyObjective[numberOfService],

    policyTeam: policyTeam[numberOfService],
    policyGroup: policyGroup[numberOfService],
    FTE: FTE[numberOfService],

    serviceBudget: serviceBudget[numberOfService],

    levelOfFunding: levelOfFunding[numberOfService],
    fundName: fundName[numberOfService]


  })
})


router.get('/v2/service-info-1', function (req, res) {

  numberOfService = req.session.data['numberOfService'];
  console.log("number of service  " + numberOfService);
  console.log("service provider  " + serviceProvider);


  if (!numberOfService) {

    numberOfService = "3";

  };



  res.render('v2/service-info-1', {
    nameOfService: nameOfService[numberOfService],
    serviceDescription: serviceDescription[numberOfService],
    MHCLGInputDescription: MHCLGInputDescription[numberOfService],
    endUserNeeds: endUserNeeds[numberOfService],
    serviceProvider: serviceProvider[numberOfService],
    roleOfMHCLG: roleOfMHCLG[numberOfService],
    endUser: endUser[numberOfService],
    serviceType: serviceType[numberOfService],
    serviceMaturity: serviceMaturity[numberOfService],
    serviceStartDate: serviceStartDate[numberOfService],
    serviceEndDate: serviceEndDate[numberOfService],

    policyObjective: policyObjective[numberOfService],

    policyTeam: policyTeam[numberOfService],
    policyGroup: policyGroup[numberOfService],
    FTE: FTE[numberOfService],

    levelOfFunding: levelOfFunding[numberOfService],
    fundName: fundName[numberOfService]


  })
})






router.get('/v2/service-info-2', function (req, res) {

  numberOfService = req.session.data['numberOfService'];
  console.log("number of service  " + numberOfService);
  console.log("service provider  " + serviceProvider);


  if (!numberOfService) {

    numberOfService = "6";

  };



  res.render('v2/service-info-2', {
    nameOfService: nameOfService[numberOfService],
    serviceDescription: serviceDescription[numberOfService],
    MHCLGInputDescription: MHCLGInputDescription[numberOfService],
    endUserNeeds: endUserNeeds[numberOfService],
    serviceProvider: serviceProvider[numberOfService],
    roleOfMHCLG: roleOfMHCLG[numberOfService],
    endUser: endUser[numberOfService],
    serviceType: serviceType[numberOfService],
    serviceMaturity: serviceMaturity[numberOfService],
    serviceStartDate: serviceStartDate[numberOfService],
    serviceEndDate: serviceEndDate[numberOfService],

    policyObjective: policyObjective[numberOfService],

    policyTeam: policyTeam[numberOfService],
    policyGroup: policyGroup[numberOfService],
    FTE: FTE[numberOfService],

    levelOfFunding: levelOfFunding[numberOfService],
    fundName: fundName[numberOfService]


  })
})




router.get('/v2/service-info-3', function (req, res) {

  numberOfService = req.session.data['numberOfService'];
  console.log("number of service  " + numberOfService);
  console.log("service provider  " + serviceProvider);


  if (!numberOfService) {

    numberOfService = "4";

  };



  res.render('v2/service-info-3', {
    nameOfService: nameOfService[numberOfService],
    serviceDescription: serviceDescription[numberOfService],
    MHCLGInputDescription: MHCLGInputDescription[numberOfService],
    endUserNeeds: endUserNeeds[numberOfService],
    serviceProvider: serviceProvider[numberOfService],
    roleOfMHCLG: roleOfMHCLG[numberOfService],
    endUser: endUser[numberOfService],
    serviceType: serviceType[numberOfService],
    serviceMaturity: serviceMaturity[numberOfService],
    serviceStartDate: serviceStartDate[numberOfService],
    serviceEndDate: serviceEndDate[numberOfService],

    policyObjective: policyObjective[numberOfService],

    policyTeam: policyTeam[numberOfService],
    policyGroup: policyGroup[numberOfService],
    FTE: FTE[numberOfService],

    levelOfFunding: levelOfFunding[numberOfService],
    fundName: fundName[numberOfService]


  })
})




router.get('/v2/service-info-4', function (req, res) {

  numberOfService = req.session.data['numberOfService'];
  console.log("number of service  " + numberOfService);
  console.log("service provider  " + serviceProvider);


  if (!numberOfService) {

    numberOfService = "14";

  };



  res.render('v2/service-info-4', {
    nameOfService: nameOfService[numberOfService],
    serviceDescription: serviceDescription[numberOfService],
    MHCLGInputDescription: MHCLGInputDescription[numberOfService],
    endUserNeeds: endUserNeeds[numberOfService],
    serviceProvider: serviceProvider[numberOfService],
    roleOfMHCLG: roleOfMHCLG[numberOfService],
    endUser: endUser[numberOfService],
    serviceType: serviceType[numberOfService],
    serviceMaturity: serviceMaturity[numberOfService],
    serviceStartDate: serviceStartDate[numberOfService],
    serviceEndDate: serviceEndDate[numberOfService],

    policyObjective: policyObjective[numberOfService],

    policyTeam: policyTeam[numberOfService],
    policyGroup: policyGroup[numberOfService],
    FTE: FTE[numberOfService],

    levelOfFunding: levelOfFunding[numberOfService],
    fundName: fundName[numberOfService]


  })
})

}
