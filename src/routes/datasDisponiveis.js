const express = require('express');
const router = express.Router();
const datasController = require('../controllers/datasController');

//const datasController = DatasController();

router.get('/datas-disponiveis', (req, res) => {
    const availableDates = datasController.getAvailableDates();
    res.json(availableDates);
});

module.exports = router;