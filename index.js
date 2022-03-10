require('dotenv').config();

const PORT = process.env.PORT || 9000;
const express = require('express');
const server = require('./server');

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}, user is ${process.env.USERNAME}`);
})
