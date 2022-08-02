const express = require('express');
const pool = require('../modules/pool');

const axios = require('axios');
require('dotenv').config();

const router = express.Router();


router.get('/', (req, res) => {
    // GET route code here
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/target/abs',
        headers: {
            'X-RapidAPI-Key': 'ffd515017bmsh7654bc328fdcf71p18bf99jsna21861a1756a',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    axios.request(options)
    .then((response) => {
        console.log('Response.data:', response.data);
        // setItems(response.data);
        res.send(response.data);
    })
    .catch((error) => {
        console.error('Error GETting API:', error);
        res.sendStatus(500);
    });
});

module.exports = router;