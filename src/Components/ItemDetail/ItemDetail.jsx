
import Card from 'react-bootstrap/Card';
import ItemCount from '../Contador/ItemCount';
import './ItemDetail.css'
import Button from 'react-bootstrap/Button';

const ItemDetail = ({product}) => {

  const onAdd = (contador) =>{
    console.log(`Agregamos al carrito ${contador} unidades`)
  }
  // es un array vacio el product
  // console.log({product})
    return (
        <div>
            <Card className ='card' >
              <Card.Img className='img' variant="top" src={product.img} />
              <Card.Body className='cardBody'>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text>
                  {product.price}
                </Card.Text>
                <ItemCount initial={1} stock={3} onAdd={onAdd} />
                <Button variant="primary">Volver</Button>
            {/* {console.log(product) no me lee el product} */}
              </Card.Body>
            </Card>
        </div>
      )
}

export default ItemDetail