// Create web server
// Create a new file named comments.js in the routes directory and add the following code. This will create a new web server that listens for requests on the /comments route.

var express = require('express');
var router = express.Router();

/* GET comments listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;