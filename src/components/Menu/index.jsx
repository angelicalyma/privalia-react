function Menu (props){
  function botao(item) {
    return <button className="botao" key={item}>{item}</button>

  } 
    return(<div className="menu">
    <div className="menu-botoes">

      {props.itensMenu.map(botao)}
    </div>
    <button id="catalago"><img src="icone-catalago.png"></img>Catálago</button>
  </div>)
}
export default Menu