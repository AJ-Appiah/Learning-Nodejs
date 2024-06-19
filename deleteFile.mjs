import { unlink } from "node:fs";

unlink('./hello.html', () => {
    console.log('File deleted');
});

// Listen for incoming request
Server.listen(3000, '127.0.0.1', function () {
    console.log('Server is runnig');
});