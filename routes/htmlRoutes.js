const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join('/index.html'));
});

module.exports = router;