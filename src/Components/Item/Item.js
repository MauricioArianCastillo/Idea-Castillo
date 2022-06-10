import ItemCount from "../ItemCount/ItemCounts";

function Item ({id,title,price,pictureUrl}){

    return(
        <>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
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
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                        </div>
                        {<ItemCount stock="10" initial="0" onAdd={(count) => console.log("Cantidad: " + count)} />}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Item;