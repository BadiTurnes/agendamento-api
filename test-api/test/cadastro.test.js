const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const cadastroAgendamento = require('../fixtures/cadastroAgendamento.json')
const bodyCadastro = { ...cadastroAgendamento }

describe('Cadastro de Agendamentos', () => {
    describe('POST /agendamentos', () => { 
        it('US01-01: Realizar cadastro de agendamento, no dia livre com sucesso', async () => {           
            const resposta = await request(process.env.BASE_URL)
                    .post('/agendamentos')
                    .set('Content-Type', 'application/json')
                    .send(bodyCadastro.agNovo)
            
            expect(resposta.status).to.equal(201)
            expect(resposta.body.message).to.equal('Agendamento criado com sucesso.')
        })
        it('US01-02: Tentar realizar cadastro de agendamento, no dia ocupado', async () => {
            //const bodyCadastro = { ...cadastroAgendamento }
            const resposta = await request(process.env.BASE_URL)
                    .post('/agendamentos')
                    .set('Content-Type', 'application/json')
                    .send(bodyCadastro.agExistente)
            
            expect(resposta.status).to.equal(400)
            expect(resposta.body.message).to.equal('Dados inválidos')
        })
        it('US01-05: Tentar realizar cadastro sem preencher campos códigos e nome', async () => {
            //const bodyCadastro = { ...cadastroAgendamento }
            const resposta = await request(process.env.BASE_URL)
                    .post('/agendamentos')
                    .set('Content-Type', 'application/json')
                    .send(bodyCadastro.dadosInvalida)
            
            expect(resposta.status).to.equal(400)
            expect(resposta.body.message).to.equal('Dados inválidos')
        })
        it('US01-06: Tentar realizar cadastro sem preencher campos códigos, nome e data', async () => {
            //const bodyCadastro = { ...cadastroAgendamento }
            const resposta = await request(process.env.BASE_URL)
                    .post('/agendamentos')
                    .set('Content-Type', 'application/json')
                    .send(bodyCadastro.dadosVazio)
            
            expect(resposta.status).to.equal(400)
            expect(resposta.body.message).to.equal('Dados inválidos')
        })
        it('US01-07: Tentar realizar cadastro usando data fora do período permitido', async () => {
            //const bodyCadastro = { ...cadastroAgendamento }
            const resposta = await request(process.env.BASE_URL)
                    .post('/agendamentos')
                    .set('Content-Type', 'application/json')
                    .send(bodyCadastro.dataForaDoPeriodo)
            
            expect(resposta.status).to.equal(400)
            expect(resposta.body.message).to.equal('Dados inválidos')
        })
    })
})