//Imports
const express = require('express'); 
const cors = require('cors');

//Routers

//Server = express framework
const server = express();

//Server use ...
server.use(express.json());
server.use(cors());

//Server Routes

//What will be seen when the API is accessed
server.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Welcome to the African Marketplace Backend</h1>"
    )
});

//export default server;
module.exports = server;