/// <reference types="Cypress" />

class CriarContaElements {
  botaoCriar = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 dbtKud"]' }
  botaoAplicar = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 ccqfSD modalCitiesstyles__ButtonSubmit-sc-8wy982-3 heudMh"]' }
  campoCelular = () => { return 'input[class="Inputstyles__Input-sc-7da5di-2 cQLayK"]' }
  botaoContinuar = () => { return 'button[type="submit"]' }
  campoCodigo = () => { return 'input[class="InputCodestyles__DigitField-sc-1qt07u-1 iUJvvA"]' }
  campoNome = () => { return 'input[id="name"]' }
  campoEmail = () => { return 'input[id="email"]' }
  campoCpf = () => { return 'input[id="taxId"]' }
  campoNasc = () => { return 'input[id="birthDate"]' }
  textoOla = () => { return 'h2[class="styles__Title-sc-105wvb1-1 gjmPrr"]' }
  botaoPular = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 jCfpch"]' }
  getzPay = () => { return 'a[data-testid="card"]' }
  celularInvalido = () => { return 'span[class="Inputstyles__ErrorMessage-sc-7da5di-3 iLAyPK"]' }
  validacaoCpfInvalido = () => { return 'span[class="Inputstyles__ErrorMessage-sc-7da5di-3 iLAyPK"]' }
  validacaoNascInvalida = () => { return 'span[class="Inputstyles__ErrorMessage-sc-7da5di-3 iLAyPK"]' }
}
export default CriarContaElements;