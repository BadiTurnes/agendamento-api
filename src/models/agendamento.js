const { v4: uuidv4 } = require('uuid');

class Agendamento {
    constructor(nome, codigo, data) {
        this.id = uuidv4(); // Identificador único
        this.nome = nome;
        this.codigo = codigo;
        this.data = data;
    }
}

class AgendamentoModel {
    constructor() {
        this.agendamentos = [];
    }

    createAgendamento(nome, codigo, data) {
        const agendamento = new Agendamento(nome, codigo, data);
        this.agendamentos.push(agendamento);
        return agendamento;
    }

    updateAgendamento(id, { nome, codigo, data }) {
        const agendamento = this.agendamentos.find(a => a.id === id);
        if (!agendamento) return null;
        if (nome !== undefined) agendamento.nome = nome;
        if (codigo !== undefined) agendamento.codigo = codigo;
        if (data !== undefined) agendamento.data = data;
        return agendamento;
    }

    deleteAgendamento(id) {
        const idx = this.agendamentos.findIndex(a => a.id === id);
        if (idx === -1) return false;
        this.agendamentos.splice(idx, 1);
        return true;
    }

    getAgendamentos() {
        return this.agendamentos;
    }

    getAgendamentoByDate(date) {
        return this.agendamentos.filter(a => a.data === date);
    }

    getAgendamentoById(id) {
        return this.agendamentos.find(a => a.id === id);
    }

    getNext14Days() {
        const days = [];
        const today = new Date();
        for (let i = 0; i < 14; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            days.push(d.toLocaleDateString('pt-BR'));
        }
        return days;
    }

    isDateValid(date) {
        const next14 = this.getNext14Days();
        return next14.includes(date);
    }

    getDaysWithAndWithoutAgendamento() {
        const next14 = this.getNext14Days();
        const result = next14.map(date => {
            const agendamentos = this.getAgendamentoByDate(date);
            return {
                date,
                hasAgendamento: agendamentos.length > 0,
                agendamentos
            };
        });
        return result;
    }
}

module.exports = new AgendamentoModel();