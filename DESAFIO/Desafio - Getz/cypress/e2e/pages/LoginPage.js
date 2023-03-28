/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

class LoginPage {
    clicarBotaoAplicar() {
        cy.get(loginElements.botaoAplicar()).click()
    }
    async clicarBotaoEntrar() {
        await cy.get(loginElements.botaoEntrar()).eq(0).click()
    }
    preencherCelular() {
        cy.get(loginElements.campoCelular()).type('15900000000')
    }
    clicarBotaoContinuar() {
        cy.get(loginElements.botaoContinuar()).click()
    }
    async preencherCodigo() {
        await cy.get(loginElements.campoCodigo()).eq(0, 1, 2, 3, 4, 5).type('123456')
    }
}
export default new LoginPage


