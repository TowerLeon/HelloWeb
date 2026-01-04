const express = require('express');

const app = express();
const PORT = 3000;

// built-in JSON body parser
app.use(express.json());

app.post('/echo', (req, res) => {
    const { message } = req.body;

    // validation
    if (typeof message !== 'string') {
        return res.status(400).json({
            error: 'message must be a string',
        });
    }

    res.json({
        message,
        length: message.length,
        timestamp: new Date().toISOString(),
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
