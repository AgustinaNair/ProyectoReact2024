import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider (props){
    const[cart, setCart] = useState([])

    function clickAdd(item, cantidad){
       
        const itemInCart = { ...item, cantidad };

        const newCart = [...cart];
        const inCart = newCart.find((producto) => producto.id === itemInCart.id);

        if (inCart) {
            inCart.cantidad += cantidad;
        } else {
            newCart.push(itemInCart);
        }
        setCart([...newCart]);
    }
    console.log(cart)
const quantityInCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
};

const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
};

const empty = () => {
    setCart([]);
};

    return <CartContext.Provider value={{cart, clickAdd, quantityInCart, totalPrice, empty}}>
                {props.children}
            </CartContext.Provider>
}