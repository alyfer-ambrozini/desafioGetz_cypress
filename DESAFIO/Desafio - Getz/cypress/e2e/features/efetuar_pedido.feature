# language: pt
# enconde: UTF-8
Funcionalidade: Site Getz

Cenario: Realizar um pedido com sucesso
    Dado que esteja na home da página Getz
    Quando acessar a opção de entrar
    E realizar login com sucesso
    E escolher uma loja
    E escolher um produto
    E finalizar o pedido
    E selecionar a forma de entrega
    E selecionar o método de pagamento
    E inserir o valor
    E confirmar o pedido
    Entao validar o pedido com sucesso

Cenario: Realizar pedido com vários produtos
    Dado que esteja na home da página Getz
    Quando acessar a opção de entrar
    E realizar login com sucesso
    E escolher uma loja
    E adicionar vários produto na sacola
    E acessar a sacola
    E finalizar o pedido
    E selecionar a forma de entrega
    E selecionar o método de pagamento
    E inserir o valor
    E confirmar o pedido
    Entao validar o pedido de vários produtos com sucesso