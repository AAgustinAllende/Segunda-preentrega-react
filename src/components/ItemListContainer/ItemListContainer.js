 import { useEffect, useState } from 'react'
 import ItemList from '../ItemList/ItemList'
 import { getProducts } from '../../mock/data'
 import ItemCount from '../ItemCount/ItemCount'

 const ItemListContainer = ({greeting}) => {
   const [productos,setProductos]=useState([])

   useEffect(()=>{
     getProducts()
     .then((res)=>setProductos(res))
     .catch((error)=>console.error(error))
   },[])
   return (
     <div>
       <h1>{greeting}</h1>
         <ItemList productos={productos}/>
     </div>
   )
 }
 export default ItemListContainer


