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
            'X-RapidAPI-Key': '0496c02c7fmsh5ea5d88b26edf8dp1da35djsn4fd4713ad7d0',
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