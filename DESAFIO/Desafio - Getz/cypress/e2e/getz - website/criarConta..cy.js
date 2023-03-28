/// <reference types="cypress" />

import CadastroPage from '../pages/CadastroPage'
const url = Cypress.config("baseUrl")

describe('Criar Conta - Getz - Cypress', () => {
    beforeEach(() => {
        cy.visit(url)
    })

    it('Realizar cadastro com sucesso', () => {
        CadastroPage.clicarBotaoAplicar();        
        CadastroPage.clicarBotaoCriarConta();
        CadastroPage.preencherCelular();
        CadastroPage.clicarBotaoContinuar();
        CadastroPage.preencherCodigo();
        CadastroPage.preencherDados();
        CadastroPage.clicarBotaoContinuar();
        CadastroPage.validarCadastro();        
        CadastroPage.validarGetzPay();
    })
    it('Validar cadastro com celular invalido', () => {
        CadastroPage.clicarBotaoAplicar();        
        CadastroPage.clicarBotaoCriarConta();
        CadastroPage.preencherCelularInvalido();        
    })
    it('Validar cadastro com e-mail invalido', () => {
        CadastroPage.clicarBotaoAplicar();        
        CadastroPage.clicarBotaoCriarConta();
        CadastroPage.preencherEmailInvalido();        
    })
    it('Validar cadastro com CPF invalido', () => {
        CadastroPage.clicarBotaoAplicar();        
        CadastroPage.clicarBotaoCriarConta();
        CadastroPage.preencherCelular2();
        CadastroPage.clicarBotaoContinuar();
        CadastroPage.preencherCodigo();               
        CadastroPage.preencherCpfInvalido();        
    })
    it('Validar cadastro com data de nascimento invalida', () => {
        CadastroPage.clicarBotaoAplicar();        
        CadastroPage.clicarBotaoCriarConta();
        CadastroPage.preencherCelular2();
        CadastroPage.clicarBotaoContinuar();
        CadastroPage.preencherCodigo();        
        CadastroPage.preencherNascInvalido();        
    })
})