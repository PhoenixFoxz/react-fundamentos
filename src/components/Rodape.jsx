function Rodape() {
  const exemplosEstilos = {
    backgroundColor: "lightblue",
    padding: "2%",
    color: "blue",
    border: "solid 4px #f00",
  };
  return (
    <footer style={exemplosEstilos}>
      <h2 style={{ textAlign: "Center" }}>Rodapé da aplicação</h2>
      <p className="destaque-texto, centralizar">Fundamentos de React</p>
      <p>
        Experimentando <b className="sombra">Classes</b>
      </p>
    </footer>
  );
}

export default Rodape;
