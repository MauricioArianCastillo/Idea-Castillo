import Item from "../Item/Item";


function ItemList({items}){

    return(
        <>
            <div>
                {items.map(i => <li><Item id={i.id} title={i.title} price={i.price} pictureUrl={i.pictureUrl}/></li>)}
            </div>
        </>
    )

}

export default ItemList;