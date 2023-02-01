const fs = require('fs');
const express = require('express');
const app = express();

// Importing products from products.json file
const userDetails = JSON.parse(
    fs.readFileSync(`${__dirname}/data/userDetails.json`)
);

//Middlewares
app.use(express.json())

// POST endpoint for registering new user
app.post('/api/v1/details', (req,res) => {
    const newId = userDetails.length+1;
    const newUser = Object.assign({ id: newId }, req.body);
    userDetails.push(newUser);
    fs.writeFile(
        `${__dirname}/data/userDetails.json`,
        JSON.stringify(userDetails), 
        err => {
            res.status(201).json({
            status: 'Success',
            message:'User registered successfully',
            data:{
                userDetails: newUser
            }
        });

    });
});

// GET endpoint for sending the details of users
app.get('/api/v1/details', (req,res) => {
    res.status(200).json({
    status:'Success',
    message:'Detail of users fetched successfully',
    data:{
        userDetails
    }
});
});
    
module.exports = app;
