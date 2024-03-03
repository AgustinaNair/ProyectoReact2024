import React,{ useContext, useState } from "react"
import { CartContext } from '../../context/cartContext';
import { addDoc, collection, getFirestore} from 'firebase/firestore';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Checkout = () => {

  const { cart, totalPrice, empty } = useContext(CartContext);
  const {register, handleSubmit} = useForm()
  const [idCompra, setIdCompra] = useState("")
    
    const sendOrder = (data) => {

      const order = {

          buyer: data,
          items: cart,                
          total: totalPrice()

      };
          
      const db = getFirestore()

      const ordenesRef = collection(db, "ordenes")

      addDoc(ordenesRef, order)
        .then((doc) => {
          setIdCompra(doc.id)
          empty()
        })

    }       
    
    if (idCompra){
      return (
        <div  style={{fontFamily:'sans-serif', padding:'30px', color:'#00066c'}}>
          <h1>Muchas gracias por tu compra</h1>
          <p style={{fontSize:'1.5rem'}}>Tu número de pedido es: {idCompra}</p>
        </div>
      )
    }

  return (
    <div>
        <h1 style={{fontFamily:'sans-serif', padding:'30px', color:'#00066c'}}>Completa tus datos para finalizar compra</h1>
        <form onSubmit={handleSubmit(sendOrder)} style={{display: 'flex', justifyContent: 'center'}}>
          <ListGroup>
            <ListGroup.Item variant="primary"><input type="text" placeholder='Juan Perez' {...register("nombre")}/></ListGroup.Item>
            <ListGroup.Item variant="primary"><input type="email" placeholder='tuemail@example.com' {...register("email")}/></ListGroup.Item>
            <ListGroup.Item variant="primary"><input type="phone" placeholder='1112341234' {...register("telefono")}/></ListGroup.Item>
            <Button type="submit">Finalizar Compra</Button>
          </ListGroup>
        </form>
    </div>
  )
}
      
export default Checkout