import { StyledArtigo } from "../styles/styles.js";

// Definindo props para o componente (parâmetros)
function Artigo({ titulo, descricao, preco }) {
  const precoFormatado = preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <StyledArtigo>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>{precoFormatado}</p>
    </StyledArtigo>
  );
}

export default Artigo;
