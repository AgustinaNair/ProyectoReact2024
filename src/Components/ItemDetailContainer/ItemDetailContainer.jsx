import React, {useEffect, useState} from 'react'
import { getItem } from '../../asyncMock'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const{id} =useParams()
    const [product, setProduct]= useState([])
    const [loading, setLoaging] = useState (true)
  
    // no se guarda el setproducts
    useEffect(()=>{
      getItem(id)
      .then((res) =>{
        setProduct(res)
      })
      .catch((err) => console.log(err))
      .finally(()=> setLoaging(false))
    }, [id])
  
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