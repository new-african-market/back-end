require('dotenv').config()
//require is the same as import
const server = require("./api/server.js")
const defaults = require("./config/default")

const port = defaults.port;

server.listen(port, () => console.log(`\n** Server up on port ${port} **\n`))