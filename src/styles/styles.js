import styled from "styled-components";

const StyledRodape = styled.footer`
  background: black;
  color: white;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 10px auto;
    text-align: center;
  }
`;

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;
  border-radius: 15px 0;
  flex: 1;

  h2,
  p {
    padding: 0.2rem 0;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      margin: 10px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      & article {
        width: 32%;
      }
    }
  }
`;

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
    width: 30%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 100ms;

    /* & -> referência ao
  seletor pai (a) */
    &:hover {
      background-color: white;
      border-radius: 15px;
      color: black;
      transform: scale(1.05);
    }
  }
`;

const StyledArtigo = styled.article`
  background: #c5cbd1;
  padding: 1rem;
  margin: 0.5rem 0;

  border-radius: 15px 0;

  h3 {
    border-bottom: solid black;
  }

  p {
    font-size: 1.1rem;
  }
`;

const StyledCabecalho = styled.header`
  background: linear-gradient(332deg, #292828 0%, rgba(19, 19, 19, 1) 100%);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: white;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

export {
  StyledRodape,
  StyledConteudo,
  StyledMenu,
  StyledArtigo,
  StyledCabecalho,
};
