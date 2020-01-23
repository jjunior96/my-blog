---
date: 2020-01-23 12:04:23
title: Aprendendo React
description: Meu inicio com React
category: dev
background: '#7159c1'
image: '/assets/img/cover.jpg'
---

![Desert](/assets/desert.jpg)

## Principais tópicos:

- **Componentes**
  - Funcional
  - Classe
    - Necessita do método render( )
    - Funções dentro de componentes de classes, **precisam** ser escritas como **arrow functions**, pois só assim para podermos acessar o **_this_**.
    - A variavel **state** é **imutável**, para atualizar o conteúdo dela, usamos o **setState()**
      - Passando um objeto com a variavel de **state** recebendo o novo **valor**
      - **OBS.:** Sempre que for necessario **adicionar** uma nova informação ao array, **mantendo** o conteudo anterior, precisamos **recriar** todo o array, respeitando o príncipio de imutabilidade. (Utilizar o **spread** ( **...** ) )
- **Estado**
  - Informações que o componente pode/precisa manipular
- **Propriedade** (props)

* Componentização
  - **Quando usar?** Isolar a lógica de um componente sem afetar o restante da aplicação.
* Módulos necessários:
  - @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
  - react react-dom
