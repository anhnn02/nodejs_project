const router = require('express').Router();
const userCtrl = require('../controller/userCtrl');

router.post('/login', userCtrl.login);
module.exports = router;