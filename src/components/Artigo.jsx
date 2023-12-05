import { StyledArtigo } from "../styles/styles.js";

// Definindo props para o componente (parâmetros)
function Artigo({ imagem, icone, titulo, descricao, data, children }) {
  return (
    <StyledArtigo>
      <p className="centralizar">
        <img src={imagem} alt="" />
      </p>
      <h3>
        <span>{icone}</span>
        {titulo}
      </h3>
      <p>{descricao}</p>
      <p>
        <b>Lançamento:</b> <time>{data}</time>
      </p>
      {children}
    </StyledArtigo>
  );
}

export default Artigo;
