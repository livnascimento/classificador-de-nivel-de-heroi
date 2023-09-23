# Classificador de Nível de Herói

Este é um projeto simples de classificação de nível de herói, desenvolvido como parte de um desafio técnico.

## Objetivo

O objetivo deste projeto é criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói e, em seguida, utilizar uma estrutura de decisão para determinar o nível do herói com base na quantidade de XP. Os níveis possíveis são Ferro, Bronze, Prata, Ouro, Platina, Ascendente, Imortal e Radiante.

## Funcionamento

O programa funciona da seguinte maneira:
- O usuário fornece o nome e a quantidade de XP do herói.
- Com base na quantidade de XP, o programa determina o nível do herói de acordo com as regras especificadas.
- Em seguida, exibe uma mensagem indicando o nome do herói e seu nível.

## Uso

Para usar o programa, siga os seguintes passos:

1. Certifique-se de que você tenha o Node.js instalado em seu sistema. Se não o tiver, você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. Clone o repositório do projeto em seu ambiente local:
   ```bash
   git clone https://github.com/livnascimento/classificador-de-nivel-de-heroi.git
   ```

3. Navegue até o diretório do projeto:
   ```bash
   cd classificador-de-nivel-de-heroi
   ```

4. Abra o arquivo `index.js` em um editor de código de sua escolha.

5. No arquivo `index.js`, você encontrará um objeto chamado `heroi` que você pode personalizar. Substitua os valores dos campos `nome` e `xp` pelos valores do herói que deseja avaliar:
   ```javascript
   const heroi = {
     nome: "Batman",
     xp: 7500,
   };
   ```

6. Após ajustar os valores do objeto `heroi`, salve o arquivo.

7. No terminal, execute o arquivo `index.js` com Node.js:
   ```bash
   node classificador.js
   ```

8. O programa calculará automaticamente o nível do herói com base na quantidade de XP fornecida e exibirá o resultado no terminal.

Exemplo de Saída:
```
O Herói de nome Batman está no nível de Ouro
```


## Tecnologias Utilizadas

- JavaScript
- Variáveis
- Operadores
- Laços de Repetição
- Estruturas de Decisões

---

Esse código foi realizado como primeiro desafio de código do bootcamp Programação do Zero da [DIO](dio.me) em parceria com o [Potência Tech](https://potenciatech.com.br/).