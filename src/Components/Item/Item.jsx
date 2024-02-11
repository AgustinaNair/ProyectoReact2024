import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
    <div>
        <Card style={{ width: '18rem', margin: '10px',height:'600px' }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text style={{height:'100px', overflow:"hidden", marginBottom:0}}>
              {product.description}
              </Card.Text>
            <Card.Text style={{marginTop:0}}>
              ...presiona Ver Producto para continuar leyendo
            </Card.Text>
            <Card.Text>
              {product.price}
            </Card.Text>
           <Link to = {`/item/${product.id}`}> <Button variant="primary">Ver producto  </Button></Link>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Item