
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/echo') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;server.jsserver.js
        });

        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const { message } = data;

                if (typeof message !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({
                        error: 'message must be a string',
                    }));
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message,
                    length: message.length,
                    timestamp: new Date().toISOString(),
                }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    error: 'invalid JSON',
                }));
            }
        });

        return;
    }

    res.writeHead(404);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
