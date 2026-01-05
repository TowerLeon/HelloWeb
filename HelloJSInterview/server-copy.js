// Import Node.js built-in HTTP module
// Purpose: gives us low-level tools to create an HTTP server
const http = require('http');

// Define the port number the server will listen on
// Purpose: ports identify which service receives network traffic
const PORT = 3000;

// Create an HTTP server
// Purpose: this function is called every time a client sends a request
const server = http.createServer((req, res) => {

    // Check if the request is a POST request to /echo
    // Purpose: basic routing (method + path)
    if (req.method === 'POST' && req.url === '/echo') {

        // Initialize an empty string to collect request body data
        // Purpose: HTTP request bodies arrive in chunks (streaming)
        let body = '';

        // Listen for incoming data chunks
        // Purpose: accumulate the full request body piece by piece
        req.on('data', chunk => {
            body += chunk; // FIXED: removed accidental "server.jsserver.js"
        });

        // Fired when all request data has been received
        // Purpose: ensures we only process the body when it is complete
        req.on('end', () => {
            try {
                // Parse the JSON string into a JavaScript object
                // Purpose: convert client JSON input into usable data
                const data = JSON.parse(body);

                // Extract the message field from the parsed object
                // Purpose: define the expected API input clearly
                const { message } = data;

                // Validate that message exists and is a string
                // Purpose: never trust client input
                if (typeof message !== 'string') {
                    // Send HTTP 400 Bad Request with JSON error
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({
                        error: 'message must be a string',
                    }));
                }

                // Send HTTP 200 OK with JSON response
                // Purpose: return processed data back to the client
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message,                        // echo back the message
                    length: message.length,        // computed server-side
                    timestamp: new Date().toISOString(), // server time
                }));
            } catch (err) {
                // Handle invalid JSON (JSON.parse throws an error)
                // Purpose: prevent server crash and return clear feedback
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    error: 'invalid JSON',
                }));
            }
        });

        // Stop further processing for this request
        // Purpose: prevents falling through to the 404 handler
        return;
    }

    // Default response for all other routes or methods
    // Purpose: ensure every request gets a response
    res.writeHead(404);
    res.end();
});

// Start the server and listen on the specified port
// Purpose: without this, the server does nothing
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
