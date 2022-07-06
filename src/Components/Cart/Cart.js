import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext";
import ItemCartCount from "../ItemCartCount/ItemCartCount";


function Cart(){

    console.log('prueba')
    const { cart, vaciarCarrito, setCart } = useCartContext()
    let Total = cart.map(item =>  item.price*item.cantidad).reduce((prev,curr) => prev + curr,0)
    const [total,setTotal] = useState(Total);

    function funcion(count,id){

        const item = cart.find((item) => item.id===id) 
        item.cantidad = count
        setTotal(cart.map(item =>  item.price*item.cantidad).reduce((prev,curr) => prev + curr,0))
        
        if (count===0) setCart(cart.filter(item => item.id !== id))
        console.log(cart)

    }
    function vaciarCarritoTotal(cart){
        vaciarCarrito(cart)
        setTotal(0)
    }
    function generarOrden(e) {
        e.preventDefault()
        let orden = {}

        orden.buyer = {name:'mauricio', email: 'm@gmail.com', phone: '123456789'}
        orden.total = total

        orden.items = cart.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.title
            const precio = cartItem.price * cartItem.cantidad
            const cantidad = cartItem.cantidad

            return {id,nombre,precio,cantidad}
        })
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, orden)
        .then(resp => alert('Compra realizada! Id: ' + resp.id))
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
                <button type="button" className="btn btn-primary" onClick={() => vaciarCarritoTotal(cart)}>Vaciar Carrito</button>
                <br></br>
                <button type="button" className="btn btn-primary" onClick={generarOrden}>Comprar</button>
            </div>
        </>
    )
}

export default Cart;