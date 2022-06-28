import ItemCount from "../ItemCount/ItemCounts";
import { Link, NavLink } from 'react-router-dom'
import Cart from "../Cart/Cart";
import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";

function Item ({id,title,price,description,pictureUrl}){

    const producto = {id:id,title:title,price:price,description:description,pictureUrl:pictureUrl}
    const { cart,addToCart} = useContext(CartContext)
    const [bool, setBool] = useState(true)
    const [contador, setContador] = useState(0)
    const onAdd = (count) =>{

        if(count!=0) {setBool(false)}
        setContador(count)
        if(cart.find((item) => item.id===id)){
            const item = cart.find((item) => item.id===id) 
            item.cantidad = item.cantidad + count
        
        }  
        else addToCart({...producto,cantidad: count})
        
    }
    console.log(cart)

    return(
        <> 
            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src={pictureUrl} alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">{id} {title}</h5>
                            ${price}
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <NavLink to={`/item/${id}`}>
                                <a className="btn btn-outline-dark mt-auto" href="#">Detalles</a>
                            </NavLink>
                        </div>
                    </div>
                    { (bool) ?
                        <ItemCount stock={10} initial={0} Add={onAdd} />
                        : 
                        <NavLink to={`/cart`}>
                            <button type="button" className="btn btn-primary">Ir al carrito</button>
                            
                        </NavLink>
                    }
                </div>
            </div>
            
        </>
    )

}

export default Item;