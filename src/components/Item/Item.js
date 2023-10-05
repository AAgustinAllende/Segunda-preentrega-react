import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

export default function Item({id,titulo,precio,categoria,imagen}) {
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
        <Link to={`/item/${id}`}>Ver detalles »</Link>
        </button>
    </div>
  </div>
  )
}
