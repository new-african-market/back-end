//require is the same as import
const server = require("./api/server.js")

const port = 8000;

server.listen(port, () => console.log(`\n** Server up on port ${port} **\n`))