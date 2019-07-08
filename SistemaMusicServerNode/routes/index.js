const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({status: 'Nodejs Backend'}));

module.exports = router;