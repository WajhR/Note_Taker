const router = require('express').Router();
const path = require('path');

router.get('/notes', (client_request, server_response) => {
    server_response.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (client_request, server_response) => {
    server_response.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;