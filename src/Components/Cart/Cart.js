import { useCartContext } from "../Contexts/CartContext";


function Cart({contador}){

    const { cart } = useCartContext()
    return(
        <>
            <div>
                <ul>
                    
                </ul>
            </div>
            <h1>La cantidad seleccionada es: {contador} </h1>
        </>
    )
}

export default Cart;