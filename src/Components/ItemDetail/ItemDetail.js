import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { CartContext } from "../Contexts/CartContext";
import ItemCount from "../ItemCount/ItemCounts";

function ItemDetail ({id,title,price,description,pictureUrl}){
    
    const producto = {id:id,title:title,price:price,description:description,pictureUrl:pictureUrl}
    const { cart,addToCart} = useContext(CartContext)
    const [bool, setBool] = useState(true)
    const Add = (count) =>{

        if(count!=0) {
            setBool(false)
            if(cart.find((item) => item.id===id)){
                const item = cart.find((item) => item.id===id) 
                if (item.cantidad + count <11) item.cantidad = item.cantidad + count
                else item.cantidad = 10
            }  
            else addToCart({...producto,cantidad: count})
        }
        else setBool('.')
        
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
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            ${price}
                            {(() => {
                                if (bool===true){ 
                                return (<ItemCount stock={10} initial={0} Add={Add} />)}
                                else if (bool===false){return (<NavLink to={`/cart`}>
                                <br></br>
                                <br></br>
                                <button type="button" className="btn btn-primary" >Ir al carrito</button>
                                
                            </NavLink>)
                                }
                                else{return(
                                    <div><br></br><h3>Por favor, ingresar un numero</h3>
                                    <br />
                                    <ItemCount stock={10} initial={0} Add={Add} />
                                    </div>) 
                                } 
                                
                            }
                            )()
                                                    
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )

}

export default ItemDetail;