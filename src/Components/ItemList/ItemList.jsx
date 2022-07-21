import Item from "../Item/Item";


function ItemList({items}){

    return(
        <>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {items.map(i => <li key={i.id} className="list-unstyled"><Item id={i.id} title={i.title} price={i.price} pictureUrl={i.pictureUrl}/></li>)}
                </div>
            </div>
        </section>
        </>
    )

}

export default ItemList;