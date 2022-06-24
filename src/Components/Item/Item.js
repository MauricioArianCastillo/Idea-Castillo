import ItemCount from "../ItemCount/ItemCounts";
import { Link, NavLink } from 'react-router-dom'
import Cart from "../Cart/Cart";
import { useState } from "react";

function Item ({id,title,price,pictureUrl}){

    const [bool, setBool] = useState(true)
    let counter = 0;
    const onAdd = (count) =>{

        counter = count
        if(count!=0) {setBool(false)}
        console.log(counter)
    }

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
                        <ItemCount stock="10" initial="0" Add={onAdd} />
                        : 
                        <Link to={'/cart'}>
                            <button type="button" className="btn btn-primary" onClick={<Cart contador={counter}></Cart>}>Ir al carrito</button>
                            
                        </Link>
                    }
                </div>
            </div>
            
        </>
    )

}

export default Item;