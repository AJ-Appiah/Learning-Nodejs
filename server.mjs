import {createServer} from 'node:http';


// Create HTTP Server
const Server = createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain' } );
    res.end('<h1>We have an HTTP Server</h1>');
});

// Listen for incoming request
Server.listen(3000, '127.0.0.1', function() {
    console.log('Server is runnig');
});

// Normal function vs Arrow Function
function handleRequest() {}
const handleRequest = () => {}

// Create HTTP Server with arrow function
const Server = createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain' } );
    res.end('<h1>We have an HTTP Server</h1>');
});

// Listen for incoming request with arrow and as anonymos function
Server.listen(3000, '127.0.0.1', () => {
    console.log('Server is runnig');
});