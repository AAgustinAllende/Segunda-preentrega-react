import "./Item.css"

const Item = ({id,titulo,precio,imagen}) => {
  return (
    
    <div className="cardB">
    <img src={imagen} class="card-img-top" alt="..."></img>
    <div className="card-body">
    <p><img className='envioFree' src='../envio.png'></img>Envio gratis</p>
    <p>Compra protegida</p>
      <h5 className="card-title">{titulo}</h5>
      <h6 className="card-text">{precio}</h6>
      <a href=''>🤍Agregar a Favoritos</a>
      <button className='btn btn-info'>
        Ver detalles »
        </button>
    </div>
  </div>
  )
}

export default Item
