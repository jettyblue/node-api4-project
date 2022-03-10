const express = require('express');
const res = require('express/lib/response');

const server = express();
server.use(express.json());

server.get('/api/users', (req, res) => {
    res.json([
        { username: 'Beyonce', password: 'sasha1234' },
        { username: 'Jay-Z', password: 'newyork1234' },
        { username: 'Kendrick', password: 'formation1234' }
    ])
})

server.post('/api/register', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password
    }
    res.status(201).json(newUser);
})

server.post('/api/login', (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.status(400).json({ message: "missing username or password" });
    } else {
        res.json({ message: `welcome back, ${req.body.username}!` });
    }
})

require('dotenv').config();
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}, user is ${process.env.USERNAME}`);
})