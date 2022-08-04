const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
    console.log( 'in router.get history/id:', req.user.id );
    let id = req.user.id
    const queryText = `SELECT * FROM "workout_history" WHERE "user_id" = $1 ORDER BY "id" DESC;`;
    pool.query(queryText, [id])
    .then(results => {
        res.send(results.rows);
    }).catch( ( error ) => {
        console.log('error in router.get/:id', error);
        res.sendStatus( 500 );
    });
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

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    console.log('This shall be req.params', req.params.id);
    const id = req.params.id

    const user = req.user.id
    console.log('This is the user', user);

    const queryText = 'DELETE FROM "workout_history" WHERE id = $1;';

    pool.query(queryText, [id])
        .then((result) => {
        res.sendStatus(201);
        })
        .catch((error) => {
        console.log('something wrong in /history DELETE', error);
        res.sendStatus(500);
        })
    // endpoint functionality
});

router.put('/:id', (req, res) => {
    console.log('This shall be req.params', req.params.id);
    console.log('This shall be req.body', req.body.notes);
	let id = req.params.id;

    const user = req.user.id
    console.log('This is the user', user);

    const queryText = `UPDATE "workout_history" SET "notes" = $1 WHERE id = $2;`;
    pool.query(queryText, [req.body.notes, id])
		.then((result) => {
			// Sends back the results in an object
			res.send(result.rows);
            res.sendStatus(200);
		})
		.catch((error) => {
			console.log('error UPDATEing history', error);
			res.sendStatus(500);
		});
});

module.exports = router;