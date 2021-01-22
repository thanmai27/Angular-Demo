const express = require('express');
var router = express.Router();
const user = require('./../controllers/usercontroller');

router.get('/user',user.usecheck);

module.exports = router;