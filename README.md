# Projeto AccountBank

[Projeto disponível no Netlify](https://accountbank.netlify.app/)

## Membros do Grupo

Danilo Elias - Implementou funcionalidades gráficas, consumo da API, idealização e estruturação do projeto.

Lucas Villarim - Implementou funcionalidades gráficas, consumo da API, idealização e estruturação do projeto.

## Propósito da Aplicação

Com o poder do Angular, a implementação de funcionalidades do Javascript passa a ser 
menos oneroso, tornando o processo prático e rápido. 
Nossa aplicação tem o intuito de simular uma aplicação de bankline onde o usuário, 
através de uma interface gráfica poderá utilizar os diferentes recursos de uma API 
feita em Java.

# Como a aplicação está estruturada?

## Landing Page (Home)

Decidimos criar uma landing page para fazer nossa estratégia de negócio, introduzindo o usuário,
mostrando os pontos relevantes que a empresa tem a oferecer.

## Sobre

Criamos uma página "sobre" para explicarmos como a empresa foi criada e quais os objetivos dela,
 o que ela pretende entregar.

## Login

Ao entrar na home, o usuário tem a disponibilidade de ir direto para uma página de login caso já seja cadastrado.

## Cadastro

Caso o usuário não possua uma conta, a aplicação disponibiliza uma tela apenas para cadastro.

# Dashboard

Ao se autenticar, o usuário irá ser redirecionado para a dashboard. Aqui ele poderá ver seus dados e 
utilizar as funcionalidades que a API estará servindo diretamente do backend em Java. 

## Extratos

O painel de usuário possui duas tabelas que irão listar os últimos lançamentos realizados em um período de datas.
Ao clicar nos inputs de calendário pode-se decidir quais datas deseja-se filtrar.

## Depósito, pagamento e transferência

Dentro da dashboard o usuário tem a possibilidade de utilizar três meios de lançamentos que a API permite, a diferença será o impacto no saldo final do usuário.
