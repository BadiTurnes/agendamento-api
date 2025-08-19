const express = require('express');
const router = express.Router();
const AgendamentoController = require('../controllers/agendamentoController');

const agendamentoController = new AgendamentoController();

// Endpoint para realizar um agendamento
router.post('/agendamentos', (req, res) => {
    agendamentoController.criarAgendamento(req, res);
});

module.exports = router;