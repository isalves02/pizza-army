# Projeto Pizza Army

Projeto fictício promovido pela Caffeine Army.

## A resolução
Foi desenvolvido uma aplicação como solicitado no modelo de plataforma **e-commerce** com o React + TypeScript + Vite + TailwindCSS, que contém as seguintes funcionalidades:

- Selecionar um produto através do seletor;
- Alterar sua quantidade através dos botões (-) e (+);
- Para remover o produto completamente do carrinho, como no padrão dos e-commerces, é necessário clicar no X referente a este;
- Como solicitado, o botão "finalizar compra" apenas fechará o menu;
- Para adicionar um novo dado a ser selecionado, pode-se acessar o arquivo src/assets/data/Product.tsx e adicionar mais uma posição no objeto :)


## Organização de pastas do projeto
Os três maiores focos foram: performance, código limpo e fácil manutenibilidade. Portanto, esse projeto possui as seguintes pastas:
  - "src/assets/components": com os componentes da aplicação;
  - "src/assets/interfaces": com todas as interfaces utilizadas na aplicação;
  - "src/assets/contexts": para reunir as funções que serão acessadas por todos os componentes;
  - "src/assets/data": possui um arquivo contendo um array de objetos para definir os produtos que serão exibidos.

## Dependências utilizadas
  - "@types/react": "^18.2.15",
  - "@types/react-dom": "^18.2.7",
  - "@typescript-eslint/eslint-plugin": "^6.0.0",
  - "@typescript-eslint/parser": "^6.0.0",
  - "@vitejs/plugin-react": "^4.0.3",
  - "autoprefixer": "^10.4.16",
  - "eslint": "^8.45.0",
  - "eslint-plugin-react-hooks": "^4.6.0",
  - "eslint-plugin-react-refresh": "^0.4.3",
  - "postcss": "^8.4.31",
  - "postcss-import": "^15.1.0",
  - "tailwindcss": "^3.3.5",
  - "typescript": "^5.0.2",
  - "vite": "^4.4.5"


## Pré-requisitos

Para executar, faz-se necessário clonar o projeto, acessar a pasta através do terminal e instalar o Node Package Manager:

```
npm install 
```

Após a concluir a instalação, executar o projeto no terminal através do comando:

```
npm run dev 
```
