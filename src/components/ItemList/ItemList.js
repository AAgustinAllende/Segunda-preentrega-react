import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import "./ItemList.css"
import Load from '../Load/Load';

export default function ItemList() {

    const [productos,setProductos]=useState([
        {
          id:1,
            titulo:"Camiseta titular AFA tres estrellas",
            precio:"$33000",
            stock:12,
            categoria:"remeras y camisetas",
            imagen: "https://celadasa.vtexassets.com/arquivos/ids/225838-800-auto?v=638140622341700000&width=800&height=auto&aspect=true"
        },
        {
          id:2,
            titulo: "Short bermuda AFA",
            precio:"$18000",
            stock:10,
            categoria:"short",
            imagen:"https://celadasa.vtexassets.com/arquivos/ids/236242-800-auto?v=638264092373830000&width=800&height=auto&aspect=true"
        },
        {
          id:3,
            titulo:"Campera de entrenamiento AFA",
            precio:"$70000",
            stock:7,
            categoria:"campera",
            imagen:"https://celadasa.vtexassets.com/arquivos/ids/238991-800-auto?v=638303155767600000&width=800&height=auto&aspect=true"
        },
        {
          id:4,
            titulo: "Remera AFA entrenamiento",
            precio:"$30000",
            stock:15,
            categoria:"remeras y camisetas",
            imagen:"https://celadasa.vtexassets.com/arquivos/ids/226260-800-auto?v=638145745027730000&width=800&height=auto&aspect=true"

        },
        {
          id:5,
          titulo:"Camiseta Argentina Seleccion femenina",
          precio:"$33000",
          stock:9,
          categoria:"remeras y camisetas",
          imagen:"https://sporting.vtexassets.com/arquivos/ids/851757-800-800?v=638241819478300000&width=800&height=800&aspect=true"
        },
        {
          id:6,
          titulo:"Campera Adidas GameDay",
          precio:"$47800",
          stock:3,
          categoria:"campera",
          imagen:"https://sporting.vtexassets.com/arquivos/ids/785907-800-800?v=638188109911130000&width=800&height=800&aspect=true"
        }]);
        
        const [mostrarItems,setMostrarItems]=useState(false);
        const [mostrarLoad,setMostrarLoad]=useState(true)

        useEffect(()=>{
            const tiempo = setTimeout(()=>{
                setMostrarLoad(false)
                setMostrarItems(true)
            },2000)

            return () => clearTimeout(tiempo);
        },[])
  
    return (
    <div className='cardA'>
      {mostrarLoad ? (
        <Load />
      ) : (
        mostrarItems &&
        productos.map((elm) => {
          return <Item titulo={elm.titulo} precio={elm.precio} imagen={elm.imagen} categoria={elm.categoria} />;
        })
      )}
    </div>
  );
}

