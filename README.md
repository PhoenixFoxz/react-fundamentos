# Fundamentos de React

## Resumo/Revisão

JSX -> HTML + JS para criar componentes

- App.jsx (Componente PRINCIPAL)
- main.jsx (Inicialização do React)
- index.html (elemento raíz e chamada do script)

### 05-styled-components

---

Biblioteca (ou lib) muito comum para estilização CSS in JS de componentes.

Para instalação, execute: npm install styled-components

Para utilização, crie componentes estilizados usando a sintaxe:

```JS
const StyledNome = styled.tag
  propriedadecss: valorDaPropriedade;
  propriedadecss: valorDaPropriedade;
```

## 04-estilos

## CSS in JS

- CSS inline: aplicado via atributo style da tag usando sintaxe JS, ou seja, objetos com propriedades.
- CSS externo e global

---

## 00-projeto-resetado

## Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx

**Esse comando abre o servidor**

`npm run dev -- --host 0.0.0.0 --open`
