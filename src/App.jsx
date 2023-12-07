import Cabecalho from "./components/Cabecalho";
import Home from "./pages/Home";
import Container from "./components/Container";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Home />
        <Produtos />
        <Contato />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
