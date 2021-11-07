//Imports
const express = require('express'); 
const cors = require('cors');
const helmet = require('helmet');

//Routers --> api crud operation files

//Server = express framework
const server = express();

//Server use --> tells user to use imports and how
server.use(express.json());
server.use(cors());
server.use(helmet());

//Server Routes --> tell server what paths to use


//What will be seen when the API is accessed
server.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Welcome to the African Marketplace Backend</h1>"
    )
});

//export default server;
module.exports = server;