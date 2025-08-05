import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems ] = useState([])


    const addToCart = (product) => {
            if(cartItems.some((item)= item.id === product.id)){
                alert('product already added to cart')
            }else{
                setCartItems(prevItem => [...prevItem, product])
            }
    }
    const cartCount = cartItems.length

    return(
        <CartContext.Provider value={{cartCount, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}