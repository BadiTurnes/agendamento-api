const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

/**
 * @swagger
 * /agendamentos:
 *   post:
 *     summary: Criar agendamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - codigo
 *               - data
 *             properties:
 *               nome:
 *                 type: string
 *               codigo:
 *                 type: string
 *               data:
 *                 type: string
 *                 example: "01/01/2024"
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/agendamentos', agendamentoController.createAgendamento);

/**
 * @swagger
 * /agendamentos/{id}:
 *   put:
 *     summary: Atualizar agendamento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               codigo:
 *                 type: string
 *               data:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agendamento atualizado
 *       404:
 *         description: Agendamento não encontrado
 */
router.put('/agendamentos/:id', agendamentoController.updateAgendamento);

/**
 * @swagger
 * /agendamentos/{id}:
 *   delete:
 *     summary: Deletar agendamento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agendamento deletado
 *       404:
 *         description: Agendamento não encontrado
 */
router.delete('/agendamentos/:id', agendamentoController.deleteAgendamento);

/**
 * @swagger
 * /agendamentos:
 *   get:
 *     summary: Listar todos agendamentos
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 */
router.get('/agendamentos', agendamentoController.getAgendamentos);

/**
 * @swagger
 * /dias:
 *   get:
 *     summary: Listar próximos 14 dias disponíveis
 *     responses:
 *       200:
 *         description: Lista de dias
 */
router.get('/dias', agendamentoController.listNext14Days);

/**
 * @swagger
 * /dias/status:
 *   get:
 *     summary: Listar dias com e sem agendamento
 *     responses:
 *       200:
 *         description: Lista de dias com status
 */
router.get('/dias/status', agendamentoController.listDaysWithAndWithoutAgendamento);

/**
 * @swagger
 * /agendamentos/data/{date}:
 *   get:
 *     summary: Consultar agendamento por data
 *     parameters:
 *       - in: path
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           example: "01/01/2024"
 *     responses:
 *       200:
 *         description: Detalhes do agendamento
 *       400:
 *         description: Data inválida
 */
router.get('/agendamentos/data/:date', agendamentoController.getAgendamentoByDate);

module.exports = router;
