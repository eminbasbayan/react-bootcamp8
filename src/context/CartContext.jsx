import { createContext } from "react";

const CartContext = createContext();


const CartProvider = (props) => {

    return (
        <CartContext.Provider value={{}}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider