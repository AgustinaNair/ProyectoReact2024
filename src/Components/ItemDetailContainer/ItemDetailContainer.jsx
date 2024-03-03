import React, {useEffect, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore} from "firebase/firestore";



const ItemDetailContainer = () => {

    const{id} =useParams()
    const [product, setProduct]= useState([])
    const [loading, setLoading] = useState (true)
  

    useEffect(()=>{

    const db = getFirestore()

      const productosRef = doc(db, "productos", id)

      getDoc(productosRef)
      .then(documento =>{
    
        if (documento.exists()) {
          setProduct({ ...documento.data(), id: documento.id });
        } else {
          console.log('No se encontró el documento');
        }
      })
      .catch((error) => {
        console.error('Error obteniendo el documento:', error);
      })
      .finally(() => {
        setLoading(false);
      });

    },[id])

    return (
      <>
        {
          loading
          ? <Box sx={{ display: 'flex' }} > <CircularProgress/> </Box>
          : <ItemDetail product={product}/>  
        }
      </>
    )
  }

export default ItemDetailContainer