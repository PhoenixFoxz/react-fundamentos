import Menu from "./Menu";

// Importação do módulo CSS como um objeto chamado estilos (o nome é a seu critério)

import estilos from "./Header.module.css";

function Header() {
  return (
    <header>
      <h1>
        <span className={estilos["destaque-texto"]}>Olá</span>
        <span className={estilos.sombra}>React!</span>
      </h1>
      <hr />
      <p className={`${estilos["destaque-texto"]} centralizar`}>
        Classes combinadas
      </p>
      <Menu />
    </header>
  );
}

export default Header;
