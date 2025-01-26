import http from 'node:http'; // Import the built-in http module

const server = http.createServer((request, response) => {
    return response.end('Hello World');
})

server.listen(3333)
