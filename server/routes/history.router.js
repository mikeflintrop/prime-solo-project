const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('req.body in history router', req.body);
    const duration = req.body.duration;
    console.log('We are posting,', duration, req.body );
    const queryText = `INSERT INTO "workout_history" ("user_id", "duration")
    VALUES ($1, $2);`; 

    pool.query(queryText, [req.user.id, duration])
    .then(() => {
    res.sendStatus(201);
    })
    .catch((err) => {
        console.log("Error in server/route post", err);
        res.sendStatus(500);
    });
});

module.exports = router;