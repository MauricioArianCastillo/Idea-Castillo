import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext";
import ItemCartCount from "../ItemCartCount/ItemCartCount";


function Cart(){

    const { cart, vaciarCarrito } = useCartContext()
    let Total = cart.map(item =>  item.price*item.cantidad).reduce((prev,curr) => prev + curr,0)
    const [total,setTotal] = useState(Total);
    function funcion(count,id){

        const item = cart.find((item) => item.id===id) 
        item.cantidad = count
        setTotal(cart.map(item =>  item.price*item.cantidad).reduce((prev,curr) => prev + curr,0))
    }
    
    
    
    return(
        <>
            <div>
                <ul className="list-group">
                    {
                        cart.map(item => <li key={item.id} className="list-group-item">
                            <div className="w-25">
                            <img src={item.pictureUrl} className='w-25'/>
                            </div>
                            Nombre: {item.title} <ItemCartCount stock={100} initial={0} item={item} id={item.id} funcion={funcion}/> Precio: ${item.price} </li>)
                    }
                </ul>
            </div>
            <div>
                <h3>TOTAL: ${total}</h3>
            </div>
            <div className="btn">
                <button type="button" className="btn btn-primary" onClick={() => vaciarCarrito(cart)}>Vaciar Carrito</button>
            </div>
        </>
    )
}

export default Cart;