/// <reference types="cypress" />
import EfetuarPedidoPage from '../pages/EfetuarPedidoPage'
import LoginPage from '../pages/LoginPage'
const url = Cypress.config("baseUrl")

describe('Efetuar Pedido - Getz - Cypress', () => {
    beforeEach(() => {
        cy.visit(url)
    })

    it('Realizar login válido e efetuar pedido com sucesso', () => {
        LoginPage.clicarBotaoAplicar();
        LoginPage.clicarBotaoEntrar();
        LoginPage.preencherCelular();
        LoginPage.clicarBotaoContinuar();
        LoginPage.preencherCodigo();
        EfetuarPedidoPage.clicarBotaoLoja();
        EfetuarPedidoPage.selecionarProduto();
        EfetuarPedidoPage.clicarBotaoAddPagar();
        EfetuarPedidoPage.clicarOpcaoPagamento();
        EfetuarPedidoPage.preencherValor();        
        EfetuarPedidoPage.clicarFinalizarAll();
        EfetuarPedidoPage.clicarConfirmarPedido();
        EfetuarPedidoPage.validarPedido();
    })
    it('Adicionar vários produtos no carrinho e efetuar pedido com sucesso', () => {
        LoginPage.clicarBotaoAplicar();
        LoginPage.clicarBotaoEntrar();
        LoginPage.preencherCelular();
        LoginPage.clicarBotaoContinuar();
        LoginPage.preencherCodigo();
        EfetuarPedidoPage.clicarBotaoLoja();
        EfetuarPedidoPage.selecionarProduto();
        EfetuarPedidoPage.clicarBotaoAdicionar();
        EfetuarPedidoPage.selecionarProduto2();
        EfetuarPedidoPage.clicarBotaoAdicionar();
        EfetuarPedidoPage.selecionarProduto3();
        EfetuarPedidoPage.clicarBotaoAdicionar();
        EfetuarPedidoPage.selecionarProduto4();
        EfetuarPedidoPage.clicarBotaoAdicionar();
        EfetuarPedidoPage.selecionarProduto5();
        EfetuarPedidoPage.clicarBotaoAdicionar();
        EfetuarPedidoPage.selecionarProduto6();
        EfetuarPedidoPage.clicarBotaoAdicionar();        
        EfetuarPedidoPage.clicarBotaoSacola();
        EfetuarPedidoPage.clicarFinalizarPedido();       
        EfetuarPedidoPage.clicarOpcaoPagamento();        
        EfetuarPedidoPage.preencherValor();        
        EfetuarPedidoPage.clicarFinalizarAll();
        EfetuarPedidoPage.clicarConfirmarPedido();
        EfetuarPedidoPage.validarPedido();
    })
})

