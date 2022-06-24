import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { CartContext } from "../Contexts/CartContext";
import ItemCount from "../ItemCount/ItemCounts";

function ItemDetail ({id,title,price,description,pictureUrl}){
    
    const { addToCart} = useContext(CartContext)
    const [bool, setBool] = useState(true)
    let counter=0; 
    const Add = (count) =>{

        counter = count
        if(count!=0) {setBool(false)}
        console.log(counter)
       // addToCart({...{id,title,price,description,pictureUrl},cantidad: count})
    }

    
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
                            <ItemCount stock="10" initial="0" Add={Add} />
                            : 
                            <Link to={'/cart'}>
                                <button type="button" className="btn btn-primary" onClick={<Cart contador={counter}></Cart>}>Ir al carrito</button>
                                
                            </Link>
                             }
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )

}

export default ItemDetail;