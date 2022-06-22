import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import ItemCount from "../ItemCount/ItemCounts";

function ItemDetail ({id,title,price,description,pictureUrl}){
    
    let bool = true
    let counter=0; 
    function Add(count){
        bool = false;
        counter = count;
    }

    return(
        <>
        { (bool) ?
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
                            <ItemCount stock="10" initial="0" onAdd={Add} />
                        </div>
                    </div>
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

export default ItemDetail;