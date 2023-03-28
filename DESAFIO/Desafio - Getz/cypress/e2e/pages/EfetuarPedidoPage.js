/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'
import EfetuarPedidoElements from '../elements/EfetuarPedidoElements'
const efetuarPedidoElements = new EfetuarPedidoElements

class EfetuarPedidoPage {
    clicarBotaoAplicar() {
        cy.get(efetuarPedidoElements.botaoAplicar()).click()
    }
    async clicarBotaoLoja() {
        await cy.get(efetuarPedidoElements.loja()).eq(0).click()
    }
    async selecionarProduto() {
        await cy.get(efetuarPedidoElements.produto()).eq(0).click()
    }
    clicarBotaoAdicionar() {
        cy.get(efetuarPedidoElements.botaoAdicionar()).click()
    }
    clicarBotaoAddPagar() {
        cy.get(efetuarPedidoElements.botaoAddPagar()).click()
    }
    async clicarBotaoSacola() {
        cy.get(efetuarPedidoElements.botaoSeta()).click()
        await cy.get(efetuarPedidoElements.botaoSacola()).eq(0).click()
    }
    async clicarFinalizarPedido() {
        await cy.contains(efetuarPedidoElements.finalizarPedido()).click()
    }
    clicarOpcaoPagamento() {
        cy.get(efetuarPedidoElements.opcaoPagamento()).click()
    }
    preencherValor() {
        cy.get(efetuarPedidoElements.valor()).type('10000')
        cy.get(efetuarPedidoElements.confirmarValor()).click()
    }
    clicarFinalizarAll() {
        cy.get(efetuarPedidoElements.finalizarAll()).click()
    }
    clicarConfirmarPedido() {
        cy.contains(efetuarPedidoElements.confirmarPedido()).click()
    }
    validarPedido() {
        cy.get(efetuarPedidoElements.validacaoPedido()).should('have.text', 'Não foi possível finalizar seu pedido!')
    }


    // Adicionar vários produtos

    async selecionarProduto2() {
        await cy.get(efetuarPedidoElements.produto()).eq(1).click()
    }

    async selecionarProduto3() {
        await cy.get(efetuarPedidoElements.produto()).eq(2).click()
    }

    async selecionarProduto4() {
        await cy.get(efetuarPedidoElements.produto()).eq(3).click()
    }

    async selecionarProduto5() {
        await cy.get(efetuarPedidoElements.produto()).eq(4).click()
    }

    async selecionarProduto6() {
        await cy.get(efetuarPedidoElements.produto()).eq(5).click()
    }
}
export default new EfetuarPedidoPage


