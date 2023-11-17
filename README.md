# Front-end Mentor REST Countries API with color theme switcher

Repositório criado para realizar o desafio de front-end do Front-end Mentor.

## Table of contents

- [Descrição](#descrição)

- [Screenshot](#screenshot)

- [Links](#links)

- [Funcionalidades](#funcionalidades)

  - [Funcionalidades Principais](#1-funcionalidades-principais)
  - [Funcionalidades Extras](#2-funcionalidades-extras)

- [Tecnologias Utilizadas](#tecnologias-utilizadas)

  - [Bibliotecas](#1-bibliotecas)
  - [Outras](#2-outras)

- [Rodando O Projeto](#rodando-o-projeto)

- [Extensões Do VS Code](#extensões-do-vs-code)

- [Estrutura De Pastas](#estrutura-de-pastas)

- [Status Do Projeto](#status-do-projeto)

## Descrição

Um aplicativo para fazer uma integração com o **[REST Countries API](https://restcountries.com)** para extrair dados dos países e exibi-los na aplicação.

## Screenshot

![API_REST](https://github.com/wagnnermorais/FEM-Rest-Countries-API/assets/89792700/05e6e08e-5372-431c-a493-367996fb0adf)

## Links

- URL do site em produção: <https://fem-rest-countries-api-two.vercel.app/>
- URL do Frontend Mentor: <https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-MlQpJKmR-->

## Funcionalidades

O usuários devem ser capazes de:

### 1. Funcionalidades Principais

- [x] Ver todos os países da API fornecida.

- [x] Pesquisar um país usando um campo `input`.

- [x] Filtrar países por região.

- [x] Clicar em um país para ver informações mais detalhadas em uma página separada.

- [x] Clicar nos países de fronteira na página de detalhes.

- [x] Alternar o esquema de cores entre o modo claro e escuro.

### 2. Funcionalidades extras

- [x] Botão para ver mais países, criando 2 linhas de 4 containers de países a cada clique.

- [x] Botão para ver menos países, removendo 2 linhas de 4 containers de países a cada clique, porém, desabilitado quando o número de linhas minímo é 2.

## Tecnologias Utilizadas

### 1. Bibliotecas

- [React.js](https://react.dev/learn/ "Documentação Do React.js")

- [React Router Dom](https://reactrouter.com/en/main/ "Documentação do React Router Dom")

- [React Icons](https://react-icons.github.io/react-icons/ "Documentação do React Icons")

- [Ionicons](https://ionic.io/ionicons/usage/ "Documentação do Ionicons")

- [Framer Motion](https://www.framer.com/motion/ "Documentação do Framer Motion")

### 2. Outras

- [Vite](https://vitejs.dev/guide/ "documentação do vite")

## Rodando O Projeto

Para rodar o projeto na sua máquina, será necessário clonar o repositório mesmo e rodar os respectivos comandos para iniciar um servidor do projeto através do Vite:

```bash
npm install
```

```bash
npm run dev
```

## Extensões Do VS Code

Também é recomendado a instalação das seguintes extensões para a organização e padronização do projeto:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) *(opcional)*

## Estrutura De Pastas

| Folders | Folders | Description |
| ---: | ---: | --- |
| `src/` |               |     |
|        | `components/` | Componentes reutilizáveis da aplicação. Componentes que são unidades para sua aplicação, um button, um dropdown, um modal, etc. |
|        | `hooks/`      | Essa pasta é utilizada para armazenar hooks que são genéricos, têm interação com hooks do React (useState, useEffect) e normalmente reutilizáveis e qualquer projeto, exemplos: useScreenSize, useLocalStorage, useSessionStorage, useUserActive. 
|        | `pages/`      | As pages são as páginas que usam vários componentes. É essa a página que o usuário vai ver. |
|        | `styles/`     | Armazena todas as folhas de estilos da aplicação. |
|        | `utils/`      | Nesta pasta são criadas funções utilitárias para a aplicação.|

## Status Do Projeto

:heavy_check_mark: Projeto finalizado :rocket:
