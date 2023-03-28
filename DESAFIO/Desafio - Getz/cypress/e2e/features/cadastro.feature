# language: pt
# enconde: UTF-8
Funcionalidade: Site Getz

Cenario: Realizar cadastro com sucesso
    Dado que esteja na home da página Getz
    Quando acessar a opção de criar conta
    E preencho um celular válido
    E coloco o codigo correto
    E preencho todos os dados válidos no formulário
    Entao validar o cadastro do usuário


Cenario: Validar cadastro com celular inválido
    Dado que esteja na home da página Getz
    Quando acessar a opção de criar conta
    E preencho um celular inválido
    Entao validar celular inválido

Cenario: Validar cadastro com e-mail inválido
    Dado que esteja na home da página Getz
    Quando acessar a opção de criar conta
    E preencho um e-mail inválido
    Entao validar e-mail inválido

Cenario: Validar cadastro com CPF invalido
    Dado que esteja na home da página Getz
    Quando acessar a opção de criar conta
    E preencho um celular válido
    E após preencher um CPF invalido
    Entao validar CPF inválido

    Cenario: Validar cadastro com data de nascimento invalida
    Dado que esteja na home da página Getz
    Quando acessar a opção de criar conta
    E preencho um celular válido
    E após preencher uma data de nascimento inválida
    Entao validar data de nascimento inválida