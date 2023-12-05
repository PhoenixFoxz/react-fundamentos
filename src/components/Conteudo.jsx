import { StyledConteudo } from "../styles/styles.js";
import cursos from "../../modulos/cursos.js";
import Artigo from "./Artigo";

function Conteudo() {
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, pariatur
        explicabo. Rerum excepturi corporis, esse quisquam ullam cum et ad ea
        facere voluptas optio suscipit voluptatibus nulla praesentium odio ut
        similique maxime recusandae molestias est labore voluptatem non
        consequatur. Quam ratione, vero, itaque beatae maxime amet facilis
        aperiam nostrum officiis dolore cupiditate, veritatis ea dicta libero
        praesentium laboriosam quas voluptatibus culpa rem? Minima odio cumque
        quaerat, corporis a eos quam nemo perspiciatis sunt, incidunt
        consequuntur. Distinctio explicabo illo incidunt. Officia laboriosam
        accusamus recusandae at iste. Cupiditate incidunt ullam molestias
        voluptate et numquam excepturi porro sit ipsam quae. Eveniet, officiis
        facilis?
      </p>
      <div>
        {cursos.map((curso) => {
          return (
            <Artigo
              key={curso.id}
              titulo={curso.titulo}
              descricao={curso.categoria}
              preco={curso.preco}
            />
          );
        })}
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
