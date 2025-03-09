import http from 'node:http'; // Import the built-in http module

const users = []

const server = http.createServer((request, response) => {
    const { method, url } = request;

    if (method === 'GET' && url === '/users') {
        return response
            .setHeader('Content-Type', 'application/json')
            .writeHead(200)
            .end(JSON.stringify(users));
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })

        return response.writeHead(201).end();
    }

    return response
        .writeHead(404)
        .end('Not Found');
})

server.listen(3333)
