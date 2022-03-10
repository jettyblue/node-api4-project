const express = require('express');
const req = require('express/lib/request');
const { logger } = require('../middleware/middleware');
const User = require('./users-model');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ users: ['beyonce', 'jay-z', 'kendrick'] });
})

router.post('/register', (req, res, next) => {
    res.json({
        username: req.body.username,
        password: req.body.password
    });
})

router.post('/login', (req, res, next) => {
    res.json({
        username: req.body.username,
        password: req.body.password,
        message: `welcome back ${req.body.username}!`
    });
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        custom: 'something went wrong',
        message: err.message,
        stack: err.stack
    });
})

module.exports = router;
