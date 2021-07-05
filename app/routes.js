const express = require('express')
const router = express.Router()



// v1
require('./views/v1/routes/services-parse')(router);
require('./views/v1/routes/services-list')(router);
require('./views/v1/routes/service-info')(router);

// v2
require('./views/v2/routes/service-list')(router);
require('./views/v2/routes/service-list-policy')(router);

require('./views/v2/routes/service-list-policy-delivery')(router);

require('./views/v2/routes/service-info')(router);
require('./views/v2/routes/service-providers')(router);

require('./views/v2/routes/end-users')(router);
require('./views/v2/routes/end-user-needs')(router);

require('./views/v2/routes/policy-groups')(router);
require('./views/v2/routes/policy-group-detail')(router);

require('./views/v2/routes/policy-teams')(router);
require('./views/v2/routes/policy-team-services')(router);
require('./views/v2/routes/policy-objectives')(router);


// v4
let PrototypeVersion = 4;
require('./views/v' + PrototypeVersion + '/routes/service-info')(router);
require('./views/v' + PrototypeVersion + '/routes/service-list')(router);
require('./views/v' + PrototypeVersion + '/routes/service-list-policy')(router);
require('./views/v' + PrototypeVersion + '/routes/service-list-policy-delivery')(router);

require('./views/v' + PrototypeVersion + '/routes/policy-objectives')(router);
require('./views/v' + PrototypeVersion + '/routes/policy-groups')(router);
require('./views/v' + PrototypeVersion + '/routes/policy-teams')(router);
require('./views/v' + PrototypeVersion + '/routes/policy-team-services')(router);

require('./views/v' + PrototypeVersion + '/routes/end-users')(router);
require('./views/v' + PrototypeVersion + '/routes/end-user-needs')(router);

router.get('/v4/', function (req, res) {
  res.render('v4/index-3')
})

router.get('/v4/index', function (req, res) {
  res.render('v4/index-3')
})

router.get('/v4/feedback', function (req, res) {
  res.render('v4/feedback-3')
})

module.exports = router
