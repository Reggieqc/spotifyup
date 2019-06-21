const port = 3500;
const express = require('express');

const server = express();
const tokenRouter = require('./routes/token');

server.use((req, res, next ) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use("/api", tokenRouter);

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});