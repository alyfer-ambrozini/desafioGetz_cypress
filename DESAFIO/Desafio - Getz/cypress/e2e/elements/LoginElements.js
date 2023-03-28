/// <reference types="Cypress" />

class LoginElements {
  botaoAplicar = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 ccqfSD modalCitiesstyles__ButtonSubmit-sc-8wy982-3 heudMh"]' }
  botaoEntrar = () => { return 'button[class="Buttonstyles__Button-sc-1oph3mc-0 bWnerD"]' }
  campoCelular = () => { return 'input[class="Inputstyles__Input-sc-7da5di-2 cQLayK"]' }
  botaoContinuar = () => { return 'button[type="submit"]' }
  campoCodigo = () => { return 'input[class="InputCodestyles__DigitField-sc-1qt07u-1 iUJvvA"]' }
}
export default LoginElements;