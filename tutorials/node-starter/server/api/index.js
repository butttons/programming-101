const router = require('express').Router(); // Get express router
const authRoute = require('./auth'); // Get our /api/auth handle

router.use('/auth', authRoute); // Mount on /api/auth

module.exports = router;
