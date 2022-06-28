import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { CartContext } from "../Contexts/CartContext";
import ItemCount from "../ItemCount/ItemCounts";

function ItemDetail ({id,title,price,description,pictureUrl}){
    
    const producto = {id:id,title:title,price:price,description:description,pictureUrl:pictureUrl}
    const { cart,addToCart} = useContext(CartContext)
    const [bool, setBool] = useState(true)
    const [contador, setContador] = useState(0)
    const Add = (count) =>{

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
        
            <div className="card mb-3 max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pictureUrl} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{id} {title}</h5>
                            <p className="card-text">{description}</p>
                            ${price}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                            </div>
                            { (bool) ?
                            <ItemCount stock={10} initial={0} Add={Add} />
                            : 
                            <NavLink to={`/cart`}>
                                <button type="button" className="btn btn-primary" >Ir al carrito</button>
                                
                            </NavLink>
                             }
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )

}

export default ItemDetail;