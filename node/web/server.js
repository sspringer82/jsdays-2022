import { createServer } from 'http';

const server = createServer((request, response) => {
    response.writeHead(218, { 'Content-Type': 'text/html' });
    response.end('Hello World!');
});

server.listen(8080, () => console.log('Server running on port 8080'));