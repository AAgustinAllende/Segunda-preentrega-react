import React, { useEffect, useState } from 'react'
import "./Load.css"

export default function Load() {


  // const [mostrarLoad,setMostrarLoad]=useState(true);

  // useEffect(()=>{
  //   const loadTime=setTimeout(()=>{
  //     setMostrarLoad(false);
  //   },2000)

  //   return()=>tiempo(loadTime)
  // },[])

  // const [showLoad, setShowLoad] = useState(true);

  // useEffect(() => {
  //   // Simulamos una espera de 2 segundos antes de mostrar el contenido real
  //   const timeoutId = setTimeout(() => {
  //     setShowLoad(false);
  //   }, 2000);

  //   // Limpieza del temporizador cuando el componente se desmonta
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    const onLoad=setTimeout(()=>{
      setLoading(true)
    },2000);
    
  });
  return (
    <div>
        <div className="spinner"></div>
    </div>
  )
}
