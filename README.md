# 💸 Painelfy

Painelfy é uma aplicação web desenvolvida para o controle de transações financeiras pessoais, permitindo o gerenciamento de entradas, saídas e saldo de forma prática e visual.  
Este projeto foi construído como parte do meu processo de aprendizado com **React**, **TypeScript** e **Vite** — sendo meu **primeiro projeto completo com essa stack moderna**. 🚀

---

## 🎯 Objetivo

Criar uma ferramenta simples, bonita e funcional para registrar movimentações financeiras, com foco em:

- Boa experiência de usuário (UX)
- Visualização clara de informações
- Aprendizado de tecnologias modernas do ecossistema React

---

> ⚠️ **Observação:** Até o momento, consegui implementar com sucesso a **estrutura da aplicação** e a **integração com a API** para carregar as transações.  
> Funcionalidades como cadastro de nova transação, filtros mais avançados e feedback visual ainda estão em desenvolvimento ou planejadas para versões futuras.

---

## 🧰 Tecnologias Utilizadas

- ⚛️ **React** – Biblioteca para construção de interfaces.
- 🟦 **TypeScript** – Superset do JavaScript com tipagem estática.
- ⚡ **Vite** – Ferramenta de build rápida e moderna.
- 🎨 **Styled-components** – Estilização com CSS-in-JS e suporte a temas.
- 🌐 **Context API (React)** – Gerenciamento de estado global.
- 📏 **ESLint** – Padronização e qualidade de código.

---

## 🧩 Funcionalidades

- ✅ **Resumo financeiro** com totais de entradas, saídas e saldo.
- 📄 **Tabela de transações** com listagem dinâmica dos dados.
- 🔍 **Busca de transações** por descrição.
- ♻️ **Atualização automática** com carregamento de dados via `fetch`.
- 💡 **Contexto global** para compartilhamento de estado entre componentes.

---

## 🖼️ Capturas de Tela

### 📊 Tela com transações
![Print 1](https://drive.google.com/uc?export=view&id=1NG_5MiMJDMoJvuLavNP0DxAGjShgOjDM)

### 🧾 Tela com formulário de busca e resumo
![Print 2](https://drive.google.com/uc?export=view&id=15lG91ibDhneNgd6puIVsrTXOwjI6OzPx)

---

## 📚 Lições Aprendidas

Durante o desenvolvimento do Painelfy, pude:

- Praticar o uso do **React com TypeScript**, tipando corretamente props, estados e contextos.
- Compreender melhor a **estruturação de projetos em React**.
- Trabalhar com **hooks personalizados** e **consumo de APIs**.
- Explorar o uso de **temas com styled-components** para consistência visual.
- Aplicar o **Context API** de maneira eficiente, eliminando o uso excessivo de props.

---

## ✅ Conclusão

Este projeto foi um marco no meu aprendizado. Com ele, tive uma visão mais ampla de como montar uma aplicação React de ponta a ponta, do setup ao consumo de dados.  
Apesar de ainda não conter todas as funcionalidades desejadas, Painelfy representa um avanço importante na minha jornada como desenvolvedor e será continuamente aprimorado. ✨

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
