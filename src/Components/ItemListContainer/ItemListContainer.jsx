import React, {useEffect, useState} from 'react'
import { pedirDatosDeCategoria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const{id} =useParams()
  const [products, setProducts]= useState([])
  const [loading, setLoaging] = useState (true)

  useEffect(()=>{
    pedirDatosDeCategoria(id)
    .then((res) =>{
      setProducts(res)
    })
    .catch((err) => console.log(err))
    .finally(()=> setLoaging(false))
  }, [id])


  return (
    <>
      {
        loading
        ? <Box sx={{ display: 'flex' }} > <CircularProgress/> </Box>
        : <ItemList products={products}/>       
      }
      
    </>
  )
}

export default ItemListContainer