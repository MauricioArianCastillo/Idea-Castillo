import {  createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cart ,setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
        
    }
    const vaciarCarrito = () => setCart([])

    return (
        <CartContext.Provider 
            value={{
                cart,
                addToCart,
                vaciarCarrito,
                setCart
            }}
            >
            {children}    
        </CartContext.Provider>
    )
}