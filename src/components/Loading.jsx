import imagemLoading from "../assets/loading-gif-transparent-10.gif"

function Loading(){
    return (
      <div style={{textAlign: "center"}}>
        <img src={imagemLoading} alt="Carregando..." /> 
      </div>
    );
}

export default Loading;