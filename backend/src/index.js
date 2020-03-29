const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send("Hello BeHero");
});

app.listen(3033);