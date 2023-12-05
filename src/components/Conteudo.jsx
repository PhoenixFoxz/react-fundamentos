import { StyledConteudo } from "../styles/styles.js";
import Artigo from "./Artigo";
function Conteudo() {
  const lancamento = [
    "29 de julho de 1954",
    "1 de agosto de 1996",
    "HTML5 = 29 de Outubro de 2014 | CSS3 = dezembro de 1996",
  ];
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
      {/* Reaproveitamento de Componentes */}
      <Artigo
        icone="🏹"
        titulo="Senhor dois Anéis"
        descricao="Livro criado por Tokien"
        data={lancamento[0]}
      />
      <Artigo
        icone="🐲"
        titulo="Game Of Thrones"
        descricao="Aventura maluca com gente sempre morrendo"
        data={lancamento[1]}
      />
      <Artigo
        icone="💎"
        titulo="HTML5 e CSS3"
        descricao="Fonte de estudos para quem quer começar Front-End"
        data={lancamento[2]}
      />
    </StyledConteudo>
  );
}

export default Conteudo;
