import ItemCount from "../ItemCount/ItemCounts";
import { Link, NavLink } from 'react-router-dom'
import Cart from "../Cart/Cart";

function Item ({id,title,price,pictureUrl}){

    let bool = true, counter = 0;
    function onAdd(count){
        
        bool = false;
        counter = count;
    }

    return(
        <> {
            (bool) ?
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
                    <ItemCount stock="10" initial="0" onAdd={onAdd} />
                </div>
            </div>
            :
            <Link to={'/cart'}>
                <button type="button" className="btn btn-primary">Agregar al carrito</button>
                <Cart contador={counter}></Cart>
              </Link>
        }
            
        </>
    )

}

export default Item;