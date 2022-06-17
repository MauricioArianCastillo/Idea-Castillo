import ItemCount from "../ItemCount/ItemCounts";
import { NavLink } from 'react-router-dom'

function Item ({id,title,price,pictureUrl}){

    function onAdd(count){
        console.log("Cantidad: " + count);
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
                    {<ItemCount stock="10" initial="0" onAdd={onAdd} />}
                </div>
            </div>
        </>
    )

}

export default Item;