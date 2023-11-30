import estilos from "./Header.module.css";

function Menu() {
  return (
    <nav className={`${estilos["separacao"]} centralizar`}>
      <a href="">Home </a>
      <a href="">Produtos </a>
      <a href="">Contato</a>
    </nav>
  );
}

export default Menu;
