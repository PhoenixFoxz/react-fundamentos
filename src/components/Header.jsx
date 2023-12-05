import { StyledCabecalho } from "../styles/styles.js";
import Menu from "./Menu";

// Importação do módulo CSS como um objeto chamado estilos (o nome é a seu critério)

function Header() {
  return (
    <StyledCabecalho>
      <h1>Olá React!</h1>
      <hr />
      <p>Classes combinadas</p>
      <Menu />
    </StyledCabecalho>
  );
}

export default Header;
