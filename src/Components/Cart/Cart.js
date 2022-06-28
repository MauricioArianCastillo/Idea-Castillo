import { useParams } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext";


function Cart(){

    const { cart, vaciarCarrito } = useCartContext()
    return(
        <>
            <div>
                <ul>
                    {
                        cart.map(item => <li key={item.id}>
                            <div className="w-25">
                            <img src={item.pictureUrl} className='w-25'/>
                            </div>
                            Nombre: {item.title} Precio: {item.price} Cantidad: {item.cantidad}</li>)
                    }
                </ul>
            </div>
            <div className="btn">
                <button type="button" className="btn btn-primary" onClick={() => vaciarCarrito(cart)}>Vaciar Carrito</button>
            </div>
        </>
    )
}

export default Cart;