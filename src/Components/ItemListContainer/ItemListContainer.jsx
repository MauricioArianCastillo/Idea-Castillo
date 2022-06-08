import ItemCount from "../ItemCount/ItemCounts";

const ItemListContainer  = (props) => {

    return(
        <>
        <div className="container-fluid">
            <ItemCount stock="10" init="1" onAdd={(count) => console.log(count)} />
        </div>
      </>
    )
}

export default ItemListContainer;