import  { useEffect, useState } from 'react'
import { getItem } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer=()=> {
    const [producto,setProducto]=useState(null)

    useEffect(()=>{
        getItem()
        .then((res) => setProducto(res))
        .catch((error)=>console.log(error))
    },[])

    
    return (
        <ItemDetail producto={producto}/>
       
    )
}

export default ItemDetailContainer
