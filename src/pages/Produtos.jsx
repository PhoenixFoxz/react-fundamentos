import { useEffect } from "react";
import { useState } from "react";

function Produtos() {
  // O state "produtos" é iniciado como uma array vazio. Posteriormente (após o carregamento dos dados da API),ele será preenchido com os objetos/produtos.

  const [produtos, setProdutos] = useState();

  /* Gerenciando o efeito colateral
  do componente para o carregamento dos dados da API.

  Fluxo geral de funcionamento do código abaixo:

  1) useEffect é carregado UMA VEZ e APÓS a montagem do componente/page (Produtos)
  Obs.: o [] indica que o useEffect não tem dependência e que será executado somente UMA VEZ.
  2) Em seguida, ele executa a função carregarDados
  3) Ao término dela, atualiza o state (produtos)

  */
  useEffect(()=>{

     const carregarDados = async () => {
    try {
      const resposta = await fetch(`https://fakestoreapi.com/products`);
      const dados = await resposta.json();
      setProdutos(dados);
      console.log(dados);
    } catch (error) {
      console.error("Houve um erro: "+error)
    }
  };

  carregarDados();

  }, []);

 
  
  

  return <h2>Produtos</h2>;
}

export default Produtos;
