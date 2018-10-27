const router = require('express').Router();

// Handle at GET /api/auth/get_code
router.get('/get_code', (req, res) => {
    res.send('Dummy GET request on /api/auth/get_code');
});

module.exports = router;
