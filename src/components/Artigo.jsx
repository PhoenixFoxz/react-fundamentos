import { StyledArtigo } from "../styles/styles.js";

// Definindo props para o componente (parâmetros)
function Artigo(props) {
  return (
    <StyledArtigo>
      <p className="centralizar">
        <img src={props.imagem} alt="" />
      </p>
      <h3>
        <span>{props.icone}</span>
        {props.titulo}
      </h3>
      <p>{props.descricao}</p>
      <p>
        <time>{props.data}</time>
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
