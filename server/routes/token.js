const express = require('express');
const getClientCredentials = require('get-spotify-client-credentials');
const request = require('request');


const router = express.Router();

router.get("/token", (req, res, next) => {

    getClientCredentials(
        {
            clientId: '813be7a1ae8b4ee3bd99e28dd6396619',
            clientSecret: 'd9f1771f80cc401291a149168997beb2',
            request: request
        },
        logCreds
    );

    function logCreds(error, token) {
        if (error) {
            res.status(400).json({error, errorStack: error.stack});
        }
        else {
            res.status(201).json({ token })
        }
    }
});

module.exports = router;