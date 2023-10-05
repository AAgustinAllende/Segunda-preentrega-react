import React, { useState } from 'react'

export default function ItemCount({deshabilitado}) {
    const [cuenta,setCuenta]=useState(0)
    const [disabled,setDisabled]=useState(false)

    const incrementar =({productos})=>{
      if(productos.stock>cuenta){
        setCuenta(cuenta+1)
      }else{
        setDisabled(true)
      }

    }

    const decrementar = () =>{
        setCuenta(cuenta-1)
    }
  return (
    <div>
        <button className='btn btn-light' disabled={deshabilitado} onClick={incrementar} >+</button>
        {cuenta}
        <button className='btn btn-light' disabled={deshabilitado} onClick={decrementar}>-</button>
    </div>
  )
}
