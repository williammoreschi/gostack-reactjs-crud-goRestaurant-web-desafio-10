
# GoRestaurant
O repositório é referente ao desafio Bootcamp GoStack 11.0, da Rocketseat 🚀.

## O Desafio Proposto
Foi criar um **CRUD** (Create, Read, Update, Delete) usando uma api fake.

<img width='100%' src="https://user-images.githubusercontent.com/2512512/88996138-e1159d80-d2c2-11ea-8818-4bec999638af.gif" />
<img width='100%' src="https://user-images.githubusercontent.com/2512512/88995671-9e9f9100-d2c1-11ea-8a5f-2494b3cf2639.gif" />

## O que foi feito a mais!
- Deixei o layout responsivo adapta melhor aos diversos tamanho de tela;
- Coloquei um botão de fechar no modal;
- Ao passar o mouse nos botões precisa mostrar um efeito uma cor;

## O que daria pra melhorar
- Validar os campos do formulário;
- Por uma mascara no campo de valor;
- Colocar um opção de dark mode;

## Tecnologias Utilizadas
- React
- React Modal
- Styled-Components
- Polished
- Jest
- React Icons
- Typescript

## Teste ele na sua maquina!
```sh
# Clone o repositório
$ git clone

# va até raiz do projeto utilize o comando
$ yarn

# Inicializar a API FAKE na raiz do projeto utilize o comando
$ json-server server.json -p 3333

# Abra um segundo terminal para rodar a aplicação, agora na raiz utilize o comando
$ yarn start

# Como parar os projetos utilize o comando
$ Crtl + c

# Caso o projeto não mostre os produto, utilize o comando de parar no terminal da api rode o comando
$ adb reverse tcp:3333 tcp:3333


```
## Testes
Esse projeto utiliza Jest para realizar os testes E2E. Para inicializar os testes já preparados, utilize `yarn test` .
