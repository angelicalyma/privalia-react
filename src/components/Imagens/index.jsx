function Imagens (props){
    return(<div className="destaques-wrapper">
   {props.titulo?(<h2>{props.titulo}</h2>):(<></>)} 
    <div className="destaques">
      <img src={props.imagem1} />
      <img src={props.imagem2}/>
    </div>
    </div>)
}
export default Imagens