const http = require('http');
const app = require('./app'); // Get our express app

const port = 4000;
const server = http.createServer(app); // Create a server
// Start server
server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/`);
});
