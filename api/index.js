const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Offers API up and running...'
    });
});

module.exports = router;