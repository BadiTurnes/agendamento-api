const agendamentoModel = require('../models/agendamento');

exports.createAgendamento = (req, res) => {
    const { nome, codigo, data } = req.body;
    if (!nome || !codigo || !data) {
        return res.status(400).json({ success: false, message: 'Nome, código e data são obrigatórios.' });
    }
    if (!agendamentoModel.isDateValid(data)) {
        return res.status(400).json({ success: false, message: 'Data fora do intervalo permitido.' });
    }
    const agendamento = agendamentoModel.createAgendamento(nome, codigo, data);
    res.status(201).json({ success: true, message: 'Agendamento criado com sucesso.', agendamento });
};

exports.updateAgendamento = (req, res) => {
    const { id } = req.params;
    const { nome, codigo, data } = req.body;
    if (data && !agendamentoModel.isDateValid(data)) {
        return res.status(400).json({ success: false, message: 'Data fora do intervalo permitido.' });
    }
    const agendamento = agendamentoModel.updateAgendamento(id, { nome, codigo, data });
    if (!agendamento) {
        return res.status(404).json({ success: false, message: 'Agendamento não encontrado.' });
    }
    res.json({ success: true, message: 'Agendamento atualizado com sucesso.', agendamento });
};

exports.deleteAgendamento = (req, res) => {
    const { id } = req.params;
    const deleted = agendamentoModel.deleteAgendamento(id);
    if (!deleted) {
        return res.status(404).json({ success: false, message: 'Agendamento não encontrado.' });
    }
    res.json({ success: true, message: 'Agendamento deletado com sucesso.' });
};

exports.listNext14Days = (req, res) => {
    const days = agendamentoModel.getNext14Days();
    res.json({ success: true, days });
};

exports.listDaysWithAndWithoutAgendamento = (req, res) => {
    const result = agendamentoModel.getDaysWithAndWithoutAgendamento();
    res.json({ success: true, days: result });
};

exports.getAgendamentoByDate = (req, res) => {
    const { date } = req.params;
    if (!agendamentoModel.isDateValid(date)) {
        return res.status(400).json({ success: false, message: 'Data fora do intervalo permitido.' });
    }
    const agendamentos = agendamentoModel.getAgendamentoByDate(date);
    if (agendamentos.length === 0) {
        return res.json({ success: true, message: 'Nenhum agendamento para esta data.', agendamentos: [] });
    }
    res.json({ success: true, agendamentos });
};

exports.getAgendamentos = (req, res) => {
    const agendamentos = agendamentoModel.getAgendamentos();
    res.json({ success: true, agendamentos });
};