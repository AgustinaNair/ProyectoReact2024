import React, { useContext, useState } from 'react'
import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemCount = (props) => {

    const {cart, clickAdd} = useContext(CartContext);

    const [contador, setContador] =useState(props.initial || 1)

    const suma = () =>{
      if(contador < props.stock){
        setContador(contador+1)
      }
    }
    const resta = () =>{
      if(contador>1){
        setContador(contador-1)
      }
    }

  return (
    <div>
      <div className='sumaResta'>
        <button onClick={resta} disabled={contador == 1}>-</button>
        <h2>{contador}</h2>
        <button onClick={suma} disabled={contador == props.stock}>+</button>
      </div>
      <Link to={"/cart"} ><Button variant="primary" onClick={()=>clickAdd(props.product ,contador)} className='boton'>Agregar al carrito</Button></Link>
    </div>
  )
}

export default ItemCount