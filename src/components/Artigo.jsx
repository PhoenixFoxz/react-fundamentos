import { StyledArtigo } from "../styles/styles.js";

// Definindo props para o componente (parâmetros)
function Artigo(props) {
  return (
    <StyledArtigo>
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
    </StyledArtigo>
  );
}

export default Artigo;
