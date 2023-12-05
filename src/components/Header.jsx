import { StyledCabecalho } from "../styles/styles.js";
import Menu from "./Menu";

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
