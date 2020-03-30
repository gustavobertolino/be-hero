const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send("Hello BeHero");
});

routes.post('/users', (request, response) => {
    return response.json({
        event: 'BeHero Event',
        collaborator: 'Gustavo'
    });
});

module.exports = routes;