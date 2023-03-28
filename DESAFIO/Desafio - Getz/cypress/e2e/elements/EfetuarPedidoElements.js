/// <reference types="Cypress" />

class EfetuarPedidoElements {
  loja = () => { return 'div[class="StoreCardstyles__StoreInfo-sc-q6gkbl-2 eyDHNg"]' }
  produto = () => { return 'article[class="ItemCardstyles__CardContainer-sc-1yn6po0-0 ehZrrt"]' }
  botaoAdicionar = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 ccqfSD ModalProductDetailstyles__ButtonFooterModal-sc-49ulz9-11 bEhHoR"]' }
  botaoAddPagar = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 jCfpch ModalProductDetailstyles__ButtonFooterModal-sc-49ulz9-11 bEhHoR"]'}
  botaoSeta = () => { return 'button[class="Carouselstyles__ButtonStep-sc-10lwf3a-2 laWoYm"]' }
  botaoSacola = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 ccqfSD"]' }
  finalizarPedido = () => { return 'Finalizar meu pedido ' }
  opcaoPagamento = () => { return 'input[value="CASH"]' }
  valor = () => { return 'input[id="value"]' }
  confirmarValor = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 ccqfSD"]' }
  finalizarAll = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 ccqfSD styles__SubmitButton-sc-hkjfj5-5 iPhTDO"]' }
  confirmarPedido = () => { return 'Confirmar pedido' }
  validacaoPedido = () => { return 'strong[class="Heading__StyledComponent-sc-1pqqwui-0 bSqbzG"]' }
}
export default EfetuarPedidoElements;