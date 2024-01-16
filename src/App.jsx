import Cabecalho from "./components/Cabecalho";
import Home from "./pages/Home";
import Container from "./components/Container";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Rodape from "./components/Rodape";
import DetalhesProduto from "./pages/DetalhesProduto";

// importação de recursos/componentes do React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Produtos} path="/Produtos" />
            <Route Component={DetalhesProduto} path="/produtos/:id" /> 
            <Route Component={Contato} path="/Contato" />
          </Routes>
        </Container>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
