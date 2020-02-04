'use strict'
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => { res.render('layouts/index'); });
router.get('/login', (req, res, next) => { res.render('layouts/customer-views/login'); });

module.exports = router;