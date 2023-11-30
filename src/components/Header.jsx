import Menu from "./Menu";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>
        Olá <span className="sombra">React!</span>
      </h1>
      <hr />
      <Menu />
    </header>
  );
}

export default Header;
