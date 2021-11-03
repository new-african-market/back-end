const express = require('express'); 
const cors = require('cors');

const server = express();

//What will be seen when accessing API in heroku

server.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Welcome to the African Marketplace Backend</h1>"
    )
});

//export default server;
module.exports = server;