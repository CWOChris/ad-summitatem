const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/notes.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/node_modules'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/notes.html'));
});

module.exports = router;