import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore";

const ItemListContainer = () => {

  const{id} =useParams()
  const [products, setProducts]= useState([])
  const [loading, setLoaging] = useState (true)


  useEffect(() =>  {

    const db = getFirestore()

    
    const productosRef = collection(db, "productos")
    
    const q = id ? query(productosRef, where("category", "==", id)) : productosRef
    
    getDocs(q).then(documentos =>{
      setProducts(
        documentos.docs.map((doc) => ({id: doc.id, ...doc.data() })))
      setLoaging(false)
    })
  },[id])
  

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