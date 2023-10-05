import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'


export default function ItemDetailContainer() {
    const {id} =useParams();

    
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="" className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p>Cantidad disponible: </p>
                            <ItemCount/>
                            <button className='btn btn-light'>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
