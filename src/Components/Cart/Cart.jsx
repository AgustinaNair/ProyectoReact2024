import React,{ useContext } from "react"
import { CartContext } from '../../context/cartContext';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart, totalPrice, empty } = useContext(CartContext);
    
    const emptyCart = () => {
        empty();
    }


  return (
    <div>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'column'}}>

      {
        
        cart.map ((producto) => (
          <div key={producto.id}>

          <Card style={{ width: '18rem', margin: '10px',height:'600px' }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
              <Card.Title  style={{height:'70px'}}>{producto.name}</Card.Title>
              <Card.Text>
              Precio unitario: $ {producto.price}
                </Card.Text>
                <Card.Text>
              Cantidad: {producto.cantidad}
              </Card.Text>
              <Card.Text>
                Sub Total : $ {producto.price * producto.cantidad}
              </Card.Text>            
            </Card.Body>
          </Card>
          </div>

          ))
        }

        </div>

    { 
        cart.length > 0 ?
        
        <>
        <h2>Precio Total: $ {totalPrice()}</h2> 

        <Link to = {`/`}><Button style={{margin:'4px'}}>Agregar productos</Button></Link>
        <Link to = {`/checkout`}><Button style={{margin:'4px'}}>COMPRAR</Button></Link>
        <Button onClick={emptyCart} style={{margin:'4px'}}>Cancelar compra</Button>
        </> :

        <h2>Su carrito esta vacio</h2>
    }

    </div>
  )
}

export default Cart