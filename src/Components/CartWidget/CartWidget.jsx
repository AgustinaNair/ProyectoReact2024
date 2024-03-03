import { IoCartOutline } from "react-icons/io5";
import '../Navbar/NavBar.css'
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

const CartWidget = () => {

  const {quantityInCart} = useContext (CartContext)

  return (
    <div className="container">
        <button className="button">
            <IoCartOutline className="icono"/>
        </button>
        <p className="contadorCarrito">{quantityInCart()}</p>
    </div>
  )
}

export default CartWidget