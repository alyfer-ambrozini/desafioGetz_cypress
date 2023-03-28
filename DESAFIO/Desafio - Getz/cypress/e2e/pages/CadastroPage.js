/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'
import CriarContaElements from '../elements/CriarContaElements'
import { br } from 'faker-br';
let cpf = br.cpf();
const criarContaElements = new CriarContaElements
const nome = faker.name.fullName()
const email = faker.internet.email()
const celular = faker.random.numeric(6)
const celular2 = faker.random.numeric(6)

class CadastroPage {
    clicarBotaoAplicar() {
        cy.get(criarContaElements.botaoAplicar()).click()
    }
    clicarBotaoCriarConta() {
        cy.get(criarContaElements.botaoCriar()).click()
    }
    preencherCelular() {
        cy.get(criarContaElements.campoCelular()).type(`15998${celular}`)
    }
    clicarBotaoContinuar() {
        cy.get(criarContaElements.botaoContinuar()).click()
    }
    async preencherCodigo() {
        await cy.get(criarContaElements.campoCodigo()).eq(0, 1, 2, 3, 4, 5).type('123456')
    }
    preencherDados() {
        cy.get(criarContaElements.campoNome()).type(nome)
        cy.get(criarContaElements.campoEmail()).type(email)
        cy.get(criarContaElements.campoCpf()).type(cpf)
        cy.get(criarContaElements.campoNasc()).type('01/01/2001')
    }
    validarCadastro() {
        cy.get(criarContaElements.textoOla()).should('have.text', `Olá, ${nome}, selecione as comidas que você ama. ❤️`)
        cy.get(criarContaElements.botaoPular()).click()
    }
    validarGetzPay() {
        cy.get(criarContaElements.getzPay()).should('have.class', 'GetzPayBalancestyles__GetzPayBalanceContainer-sc-1kpl781-0 QZJwk is-selected')
    }

    // DADOS INCORRETOS
    preencherCelularInvalido() {
        cy.get(criarContaElements.campoCelular()).type('00000000000')
        cy.get(criarContaElements.celularInvalido()).should('have.text', 'Este celular é inválido')
    }
    preencherEmailInvalido() {
        cy.get(criarContaElements.campoCelular()).type('sfsjadfnsdujfhseeuao')
        cy.get(criarContaElements.celularInvalido()).should('have.text', 'Este e-mail é inválido')
    }
    preencherCpfInvalido() {
        cy.get(criarContaElements.campoNome()).type(nome)
        cy.get(criarContaElements.campoEmail()).type(email)
        cy.get(criarContaElements.campoCpf()).type('00000000000')
        cy.get(criarContaElements.validacaoCpfInvalido()).should('have.text', 'Este CPF é inválido')
    }
    preencherCelular2() {
        cy.get(criarContaElements.campoCelular()).type(`15997${celular2}`)
    }
    preencherNascInvalido() {
        cy.get(criarContaElements.campoNome()).type(nome)
        cy.get(criarContaElements.campoEmail()).type(email)
        cy.get(criarContaElements.campoCpf()).type(cpf)
        cy.get(criarContaElements.campoNasc()).type('33/33/3333')
        cy.get(criarContaElements.validacaoNascInvalida()).should('have.text', 'Data de nascimento inválida')
    }
}
export default new CadastroPage