import Conteudo from "./components/Conteudo";
import Header from "./components/Header";
import Rodape from "./components/Rodape";

function App() {
  // Comentário de uma linha CTRL ;
  /* Comentário de várias linhas ALT SHIFT A */
  return (
    <>
      <Header />
      {/* Comentário DENTRO do JSX 
    É normal ficar entre {} nesta situação.*/}
      <Conteudo />
      <Rodape />
    </>
  );
}

export default App;
