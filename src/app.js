const fs = require('fs');
const express = require('express');
const app = express();

// Importing products from userDetails.json file
const userDetails = JSON.parse(
    fs.readFileSync(`${__dirname}/data/userDetails.json`)
);

//Middlewares
app.use(express.json())

// POST endpoint for registering new user


// GET endpoint for sending the details of users

    
module.exports = app;
