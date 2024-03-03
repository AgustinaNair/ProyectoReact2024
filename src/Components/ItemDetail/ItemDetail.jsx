
import Card from 'react-bootstrap/Card';
import ItemCount from '../Contador/ItemCount';
import './ItemDetail.css'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const ItemDetail = ({product}) => {


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
                  {product.price}$
                </Card.Text>
                <Card.Text>
                  Stock disponible: {product.stock}
                </Card.Text>
                <ItemCount initial={1} stock={product.stock} product={product}/>
                <NavLink to="/"><Button variant="primary">Volver</Button></NavLink>

              </Card.Body>
            </Card>
        </div>
      )
}

export default ItemDetail