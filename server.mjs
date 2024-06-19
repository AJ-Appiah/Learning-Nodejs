import { createServer } from 'node:http';
import { unlink } from "node:fs";

// Normal function vs Arrow Function
// function handleRequest() { }
const handleRequest = () => { }

// Create HTTP Server with arrow function
const Server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        // Create a file
        writeFile('./abc.html', '<h1>Learning Node.js<h1/>', (err) => {
            console.log(err);
        // Return responds
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('<h1>File added<h1/>');
        });
    } else {
        // Delete file
        unlink('./hello.html', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('<h1>File deleted</h1>');
        });
    }
});

// Listen for incoming request with arrow and as anonymos function
Server.listen(3000, '127.0.0.1', () => {
    console.log('Server is runnig');
});