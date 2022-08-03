import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext";
import ItemCartCount from "../ItemCartCount/ItemCartCount";


function Cart(){

    const { cart, vaciarCarrito, setCart } = useCartContext()
    let Total = cart.map(item =>  item.price*item.cantidad).reduce((prev,curr) => prev + curr,0)
    const [total,setTotal] = useState(Total);
    const [name,setName] = useState('');
    const [ apellido,setApellido] = useState('')
    const [email,setEmail] = useState('');
    const [tel,setTel] = useState('');
    const [bool, setBool] = useState()
    const [id,setId] = useState()
    let error= 'error'

    function funcion(count,id){

        const item = cart.find((item) => item.id===id) 
        item.cantidad = count
        setTotal(cart.map(item =>  item.price*item.cantidad).reduce((prev,curr) => prev + curr,0))
        
        if (count===0) setCart(cart.filter(item => item.id !== id))

    }
    function vaciarCarritoTotal(cart){
        vaciarCarrito(cart)
        setTotal(0)
    }
    function generarOrden(e) {
        e.preventDefault()
        if(name && email && tel && apellido){

        let orden = {}
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
       
        orden.date = hoy.toUTCString()
        orden.buyer = {name, email, tel, apellido}
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
        .then(resp => setId(resp.id))
        setBool(true)

    }
    else{ setBool(error)}
    }

    
    return(
        <>
            <div>
                <ul className="list-group">
                    {
                        cart.map(item => <li key={item.id} className="list-group-item">
                           
                            <div className="position-relative">
                                <div className="top-0 start-0 w-25"><img src={item.pictureUrl} className='w-25'/></div>
                                <div className="position-absolute top-50 start-50 translate-middle"> Nombre: {item.title} <ItemCartCount stock={10} initial={0} item={item} id={item.id} funcion={funcion}/> Precio: ${item.price}</div>
                                <div className="position-absolute top-50 end-0 translate-middle-y"><button type="button" className="btn btn-primary" onClick={() => funcion(0,item.id)}>Eliminar</button></div>
                           
                            </div>
                            
                           
                            </li>)
                    }
                </ul>
            </div>
            <br />
            <div>
                <h3>TOTAL: ${total}</h3>
            </div>
            <div className="btn">
                <button type="button" className="btn btn-primary" onClick={() => vaciarCarritoTotal(cart)}>Vaciar Carrito</button>
                <br></br>
                <br></br>
                <br></br>
                <form action="">
                <div className="container-xxl">
                    <div className="row">
                    <div className="col">Nombre
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name"  value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    </div>
                    <div className="col">Apellido
                        <input type="text" className="form-control" placeholder="Last name" aria-label="First name"  value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label" >Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label"  >Telefono</label>
                    <input type="tel" className="form-control" id="formGroupExampleInput" placeholder="" value={tel} onChange={(e) => setTel(e.target.value)}/>
                    </div>
                    <div className="col-12">
                   
                    <button type="button" className="btn btn-primary" onClick={generarOrden}>Comprar</button>
                    </div>
                </div>
                </form>
            </div>
            <div>
            <br></br>
                    {(() => {
                         if (bool===true){ 
                         return (<h1>Compra realizada con exito! Tu id de compra es: {id}</h1>)}
                         else if (bool===error){return (
                         <h1>Error! Ingresar nuevamente los datos!</h1>)
                         }
                         else{return(
                            <br></br>) 
                        } 
                        
                    }
                    )()
                                              
                    }
            </div>
        </>
    )
}

export default Cart;