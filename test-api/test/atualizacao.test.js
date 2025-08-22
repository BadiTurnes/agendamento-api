const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const atualizarAgendamento = require('../fixtures/atualizarAgendamento.json')
const bodyAtualizarAg = { ...atualizarAgendamento }

describe('Atualizar Agendamentos', () => {
    describe('POST /agendamentos', () => {
        it.only('US02-01: Atualizar agendamento substituindo todos os campos', async () => {
            const resposta = await request(process.env.BASE_URL)
                    .post(`/agendamentos/${bodyAtualizarAg.id}`)
                    .set('Content-Type', 'application/json')
                    .send(bodyAtualizarAg.agAtualizar);
            console.log(resposta.body);
            expect(resposta.status).to.equal(200);
            expect(resposta.body.message).to.equal('Agendamento não encontrado');
        })
    })
})