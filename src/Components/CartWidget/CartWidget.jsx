import { IoCartOutline } from "react-icons/io5";
import '../Navbar/NavBar.css'

const CartWidget = () => {
  return (
    <div className="container">
        <button className="button">
            <IoCartOutline className="icono"/>
        </button>
        <p className="contadorCarrito">4</p>
    </div>
  )
}

export default CartWidget